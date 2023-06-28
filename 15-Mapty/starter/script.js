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

let map, mapEvent;

class App {
  #map;
  #mapEvent;

  constructor() {
    this.#getPosition();


    form.addEventListener(`submit`, this.#newWorkout.bind(this));


    
    inputType.addEventListener(`change`, function () {
      inputElevation.closest(`.form__row`).classList.toggle(`form__row--hidden`);
      inputCadence.closest(`.form__row`).classList.toggle(`form__row--hidden`);
    });
  }

  #getPosition() {
    if (navigator?.geolocation) {
      navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this), function () {
        alert('Could Not get your current position.');
      });
    }
  }

  #loadMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coords = [latitude, longitude];
    // console.log(coords);
    console.log(this);
    this.#map = L.map('map').setView(coords, 11);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on(`click`, function (mapE) {
      console.log(this);
      this.#mapEvent = mapE;
      form.classList.remove(`hidden`);
      inputDistance.focus();
    });
  }

  #showForm() {
    
  }

  #toggleElevationField() {}

  #newWorkout(e) { 
     
    
      // Clear Input Fields
      inputCadence.value =
        inputCadence.value =
        inputDuration.value =
        inputElevation.value =
          ``;
      // Display the Marker
      e.preventDefault();
      const coords = [this.#mapEvent.latlng.lat, this.#mapEvent.latlng.lng];
      L.marker(coords, { riseOnHover: true })
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .setPopupContent(`Workout`)
        .openPopup();
  }
}
const app = new App();
console.log(app);

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      console.log(pos);
    },
    function (err) {
      console.log(`Error getting your location ${err.message}`);
    }
  );
} else {
  console.log('Geolocation is not supported by this browser.');
}

console.log('Divine');


