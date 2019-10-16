function offset(el) {
  const { top } = el.getBoundingClientRect();
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log(top, scrollTop);
  return top + scrollTop;
}

const forecast = document.getElementById('forecast');
const forecastFoundation = document.getElementById('forecast-foundation');

if (forecast && forecastFoundation) {
  const foundation = offset(forecastFoundation);
  forecast.style.top = `${foundation + 24}px`;
}