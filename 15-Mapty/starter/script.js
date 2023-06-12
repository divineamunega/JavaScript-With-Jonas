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

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const coords = [latitude,longitude];
      // console.log(coords);
      const map = L.map('map').setView(coords, 11);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      
        
        map.on(`click`,function(mapEvent){

          form.classList.remove(`hidden`);
          inputDistance.focus()
          // const coords = [mapEvent.latlng.lat, mapEvent.latlng.lng];
          // L.marker(coords, {riseOnHover:true})
          //   .addTo(map)
          //   .bindPopup(L.popup({
          //     maxWidth:250, 
          //     minWidth:100,
          //     autoClose:false,
          //     closeOnClick:false,
          //     className: 'running-popup', 
          //   }))
          //   .setPopupContent(`Workout`)
          //   .openPopup();
      
        })
    },
    function (error) {
      console.log('Error getting location: ' + error.message);
      console.log(error);
    }
  );
} else {
  console.log('Geolocation is not supported by this browser.');
}

console.log('Divine');
