import Notiflix from 'notiflix';

const delayEl = document.querySelector('[name=delay]');
const stepEl = document.querySelector('[name=step]');
const amountEl = document.querySelector('[name=amount]');
const submitBtn = document.querySelector('button');

submitBtn.addEventListener('click', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const delayValue = Number(delayEl.value);
  const amount = Number(amountEl.value);
  const step = Number(stepEl.value);

  for (let i = 0; i < amount; i++) {
    let delay = i * step + delayValue;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position + 1} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position + 1} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
