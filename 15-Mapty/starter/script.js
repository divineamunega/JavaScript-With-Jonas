'use strict';

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

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = new Date().getTime() + ``;
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // km
    this.duration = duration; // min
  }
}

class Running extends Workout {
  type = `running`;
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
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
    this.calcSpeed();
  }

  calcSpeed() {
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

  constructor() {
    this.#getPosition();

    form.addEventListener(`submit`, this.#newWorkout.bind(this));

    inputType.addEventListener(`change`, this.#toggleElevationField);
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

    this.#map = L.map('map').setView(coords, 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on(`click`, this.#showForm.bind(this));
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
    console.log(this.#workouts);

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
      .setPopupContent(`${workout.distance}`)
      .openPopup();
  }

  // RenderWorkout
  #renderWorkout() {}
}
const app = new App();
console.log(app);
// const dive = [1,2,3,].every(ind => Number.isFinite(ind) && ind > 0);

// console.log(dive);

// const validInputs = (...input) =>
//       input.every(inp => Number.isFinite(inp) && inp > 0);

// console.log(validInputs(1,2,3,''));
