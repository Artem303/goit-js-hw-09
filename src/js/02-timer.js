import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputEl = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('button');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

btnStart.setAttribute('disabled', 'true');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let dataTimer = Date.parse(selectedDates[0]) - Date.now();

    if (Date.now() > Date.parse(selectedDates[0])) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else btnStart.removeAttribute('disabled');

    btnStart.addEventListener('click', onTimer);

    function onTimer() {
      const intervalID = setInterval(() => {
        dataTimer -= 1000;

        daysEl.textContent = addLeadingZero(String(convertMs(dataTimer).days));
        hoursEl.textContent = addLeadingZero(
          String(convertMs(dataTimer).hours)
        );
        minutesEl.textContent = addLeadingZero(
          String(convertMs(dataTimer).minutes)
        );
        secondsEl.textContent = addLeadingZero(
          String(convertMs(dataTimer).seconds)
        );
        if (dataTimer <= 1000) {
          clearInterval(intervalID);
        }
      }, 1000);
    }
  },
};

function addLeadingZero(value) {
  return value.padStart(2, 0);
}

const fp = flatpickr(inputEl, options);

console.log(123);
