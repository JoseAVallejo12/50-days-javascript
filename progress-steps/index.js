const progressStatus = document.getElementById('progress-status');
const indicators = document.getElementsByClassName('indicator');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
var currentPosition = 0;



function prevSteep() {
  currentPosition--;
  indexOverFlowControl();
  progressStatus.style.width = getProgressStatusValue();
  toggleIndicatorClassByindex(currentPosition + 1)
  if (currentPosition === 0) prev.disabled = true;
  next.disabled = false;

}

function nextSteep() {
  currentPosition++
  indexOverFlowControl()
  progressStatus.style.width = getProgressStatusValue();
  toggleIndicatorClassByindex(currentPosition, 300);
  if (currentPosition >= indicators.length - 1) next.disabled = true;
  prev.disabled = false;
}

function indexOverFlowControl() {
  if (currentPosition < 0) {
    currentPosition = 0;
  } else if (currentPosition > indicators.length - 1) {
    currentPosition = indicators.length - 1;
  }
}

function getProgressStatusValue() {
  const progressSteps = indicators.length - 1;
  return (100 / progressSteps) * currentPosition + '%'
}

function toggleIndicatorClassByindex(index, delay = 0) {
  setTimeout(() => { indicators[index].classList.toggle('active') }, delay)
}
