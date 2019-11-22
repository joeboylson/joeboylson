window.addEventListener('DOMContentLoaded', () => {

  const animatedElements = document.querySelectorAll('[data-fadeupin]');
  const animatedElementsArray = Array.prototype.slice.apply(animatedElements)

  for (let ele of animatedElementsArray) {
    let delayValue = ele.dataset.fadeupin;
    ele.classList.add('fade-up-in')
    ele.style.animationDelay = `${delayValue/10}s`
  }

})