const bodyElement = document.querySelector('body');
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
btnStop.setAttribute('disabled', 'true');

btnStart.addEventListener('click', onStartChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStartChangeColor() {
  timerId = setInterval(() => {
    bodyElement.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', 'true');
  btnStop.removeAttribute('disabled');
  return;
}

btnStop.addEventListener('click', onStopChange);

function onStopChange() {
  clearInterval(timerId);
  btnStart.removeAttribute('disabled');
  btnStop.setAttribute('disabled', 'true');
}
