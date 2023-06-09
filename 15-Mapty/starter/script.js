'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
// const deleteAllBtn = document.querySelector(`.deleteAll`);

const deleteAll = document.querySelector(`.deleteAll--btn`);
const icon = document.querySelector(`.icon`);
const questionDeleteAll = document.querySelector(`.question--deleteAll`);
const questionSure = document.querySelector(`.question__sure`);
const deleted = document.querySelector(`.deleted`);
// const workoutDelete = document.querySelector(`.deleteBtn`);
// console.log(workoutDelete);

class Workout {
  date = new Date();
  id = new Date().getTime() + `-` + Math.random();
  clicks = 0;
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // km
    this.duration = duration; // min
  }

  click() {
    this.clicks++;
  }

  setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase() + this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;

    return this.description;
  }
}

class Running extends Workout {
  type = `running`;
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.#calcPace();
    this.setDescription();
  }

  #calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = `cycling`;
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.#calcSpeed();
    this.setDescription();
  }

  #calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([12.3, 45], 5.2, 24, 178);
// const cycle1 = new Running([12.3, 45], 27, 59, 528);
// console.log(run1, cycle1);

///////////////////////////////////
// The App Class
//////////////////////////////////////////////////////////
class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoom = 13;
  deleteCount = 0;

  constructor() {
    // Get Users Position
    this.#getPosition();

    // Get Data From Local Storage
    this.#getLocalStorage();
    // Event Listeners
    form.addEventListener(`submit`, this.#newWorkout.bind(this));
    inputType.addEventListener(`change`, this.#toggleElevationField);
    containerWorkouts.addEventListener(`click`, this.#moveToPopup.bind(this));
    containerWorkouts.addEventListener(`click`, this.#deleteWorkout.bind(this));
    deleteAll.addEventListener(
      `mouseenter`,
      this.#deleteAllAnimations.bind(this)
    );
  }

  #getPosition() {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.#loadMap.bind(this),
        function () {
          alert('Could Not get your current position.');
        }
      );
    }
  }

  #loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on(`click`, this.#showForm.bind(this));

    this.#workouts.forEach(workout => {
      // this.#renderWorkout(workout);
      this.#renderWorkoutMarker(workout);
    });
  }

  #showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove(`hidden`);
    inputDistance.focus();
  }

  #toggleElevationField() {
    inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
  }

  #newWorkout(e) {
    const validInputs = (...input) =>
      input.every(inp => Number.isFinite(inp) && inp > 0);
    e.preventDefault();

    // Get Data From Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const coords = [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng];
    let workout;

    // If the workout is running --> Running Object
    if (type === `running`) {
      // Check If data is valid
      const cadence = +inputCadence.value;
      if (!validInputs(cadence, distance, duration))
        return alert('Inputs have to be positive numbers');

      // Create New Workout
      workout = new Running(coords, distance, duration, cadence);
    }

    // If the workout is cycling --> Cycling Object
    if (type === `cycling`) {
      const elevation = +inputElevation.value;

      // Check if data is valid
      if (!validInputs(distance, duration) || !Number.isFinite(elevation))
        return alert('Inputs have to be positive numbers');

      // Create New Workout
      workout = new Cycling(coords, distance, duration, elevation);
    }

    // Add new object to workout Array
    this.#workouts.push(workout);
    // console.log(this.#workouts);

    // Render workout on the map as a marker
    this.#renderWorkoutMarker(workout);

    // Render workout on list
    this.#renderWorkout(workout);

    // Hide form + Clear input fields
    inputCadence.value =
      inputCadence.value =
      inputDuration.value =
      inputElevation.value =
      inputDistance.value =
        ``;
    form.classList.add(`hidden`);
  }

  // Render Workout Marker Function
  #renderWorkoutMarker(workout) {
    L.marker(workout.coords, { riseOnHover: true })
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === `running` ? `🏃🏼‍♂️` : `🚴🏼`}${workout.description}`
      )
      .openPopup();

    // Set local Storage to all workouts
    this.#setLocalStorage();
  }

  // RenderWorkout
  #renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <button class="deleteBtn" data-id="${workout.id}">🗑️</button>
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
       <span class="workout__icon">${
         workout.type === `running` ? `🏃‍♂️` : `🚴🏼`
       }</span>
       <span class="workout__value">${workout.distance}</span>
       <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
       <span class="workout__icon">⏱</span>
       <span class="workout__value">${workout.duration}</span>
       <span class="workout__unit">min</span>
      </div>
      `;

    if (workout.type === `running`) {
      html += `<div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
  </li>`;
    }

    if (workout.type === `cycling`) {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevationGain}</span>
        <span class="workout__unit">m</span>
      </div>
  </li>`;
    }

    form.insertAdjacentHTML(`afterend`, html);
  }

  #moveToPopup(e) {
    const worloutEl = e.target.closest(`.workout`);
    if (!worloutEl) return;

    const workout = this.#workouts.find(
      work => work.id === worloutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoom, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
    // Using the Public Interfce;
    workout.click();
  }

  #setLocalStorage() {
    localStorage.setItem(`workouts`, JSON.stringify(this.#workouts));
  }

  #getLocalStorage() {
    const data = JSON.parse(localStorage.getItem(`workouts`));
    if (!data) return;

    // this.#workouts = data;

    data.forEach(data => {
      if (data.type === `running`) {
        this.#workouts.push(
          new Running(data.coords, data.distance, data.duration, data.cadence)
        );
      } else if (data.type === `cycling`) {
        this.#workouts.push(
          new Cycling(
            data.coords,
            data.distance,
            data.duration,
            data.elevationGain
          )
        );
      }
    });

    this.#workouts.forEach(workout => {
      this.#renderWorkout(workout);
      // this.#renderWorkoutMarker(workout);
    });

    // this.#workouts = JSON.parse(data);
  }

  #deleteWorkout(e) {
    const deleteBtn = e.target.closest(`.deleteBtn`);
    if (!deleteBtn) return;
    console.log(deleteBtn);

    const workoutIndex = this.#workouts.findIndex(
      work => work.id === deleteBtn.dataset.id
    );
    const deletedWorkout = this.#workouts.splice(workoutIndex, 1);
    const deletedEl = deleteBtn.closest(`.workout`);
    deletedEl.remove();
    location.reload();
    this.#setLocalStorage();
  }

  reset() {
    localStorage.removeItem(`workouts`);
    location.reload();
  }

  #deleteAllAnimations(e) {
    const doneAll = function (e) {
      // console.log(controller);
      questionSure.classList.add(`hidden`);
      deleted.classList.remove(`hidden`);
      e.target.classList.add(`deleted`);
      icon.textContent = `done_all`;
      this.deleteCount = 3;
      console.log(this.deleteCount);
      this.#deleteAll()
    };

    if (this.deleteCount === 0) {
      this.deleteCount = 1;
      e.target.classList.add(`question-1`);
      console.log(e.target);
      questionDeleteAll.classList.remove(`hidden`);
      // console.log(count);
      // const wow = removeEventListener(`mouseleave`, e.target);
      // console.log(wow);

      e.target.addEventListener(
        `click`,
        function () {
          console.log(this.deleteCount);
          if (this.deleteCount === 1) {
            // console.log(count);
            questionDeleteAll.classList.add(`hidden`);
            questionSure.classList.remove(`hidden`);
            e.target.classList.add(`question-2`);
            icon.textContent = `question_mark`;
            this.deleteCount = 2;
            e.target.removeEventListener(`click`, doneAll.bind(this));
            // e.target.removeEventListener("click")
            if (this.deleteCount === 2) {
              e.target.addEventListener(`click`, doneAll.bind(this));
            }
            e.target.addEventListener(
              'mouseleave',
              function () {
                // console.log(count);
                if (this.deleteCount === 3) {
                  this.deleteCount = 0;
                  // console.log(count);
                  icon.textContent = `delete_forever`;
                  deleted.classList.add(`hidden`);
                  e.target.classList.remove(
                    `deleted`,
                    `question-2`,
                    `question-1`
                  );
                  // removeEventListener("mouseleave",e.target);
                }
              }.bind(this)
            );
          }
        }.bind(this)
      );
    }
  }

  #deleteAll() {
    this.#workouts = [];
    this.#setLocalStorage();

//     containerWorkouts.innerHTML = `<form class="form hidden">
//     <div class="form__row">
//       <label class="form__label">Type</label>
//       <select class="form__input form__input--type">
//         <option value="running">Running</option>
//         <option value="cycling">Cycling</option>
//       </select>
//     </div>
//     <div class="form__row">
//       <label class="form__label">Distance</label>
//       <input class="form__input form__input--distance" placeholder="km" />
//     </div>
//     <div class="form__row">
//       <label class="form__label">Duration</label>
//       <input
//         class="form__input form__input--duration"
//         placeholder="min"
//       />
//     </div>
//     <div class="form__row">
//       <label class="form__label">Cadence</label>
//       <input
//         class="form__input form__input--cadence"
//         placeholder="step/min"
//       />
//     </div>
//     <div class="form__row form__row--hidden">
//       <label class="form__label">Elev Gain</label>
//       <input
//         class="form__input form__input--elevation"
//         placeholder="meters"
//       />
//     </div>
//     <button class="form__btn">OK</button>
//   </form>
// `;

    location.reload()
  }
}
const app = new App();
// console.log(app);
// const dive = [1,2,3,].every(ind => Number.isFinite(ind) && ind > 0);

// console.log(dive);

// const validInputs = (...input) =>
//       input.every(inp => Number.isFinite(inp) && inp > 0);

// console.log(validInputs(1,2,3,''));
