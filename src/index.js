function offset(el) {
  const { top } = el.getBoundingClientRect();
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return top + scrollTop;
}

function placeForecast(forecast, foundation) {
  if (forecast && foundation) {
    forecast.style.top = `${offset(foundation) + 24}px`;
  }
}

const forecast = document.getElementById('forecast');
const forecastFoundation = document.getElementById('forecast-foundation');

placeForecast(forecast, forecastFoundation);
window.addEventListener('resize', () =>
  placeForecast(forecast, forecastFoundation)
);

const attrToBool = (el, attr) => el.getAttribute(attr) === 'true';

const menuToggle = document.querySelector('[data-menu-toggle]');

const toggleMenu = ({ currentTarget }) => {
  if (currentTarget) {
    const isExpanded = attrToBool(currentTarget, 'aria-expanded');
    const dropdown = document.getElementById(
      currentTarget.getAttribute('aria-controls')
    );
    if (dropdown) {
      currentTarget.setAttribute('aria-expanded', !isExpanded);
      dropdown.setAttribute('aria-expanded', !isExpanded);
    }
  }
};

if (menuToggle) {
  menuToggle.addEventListener('click', toggleMenu);
}

const hasInput = ({ currentTarget }) => {
  console.log(currentTarget);
  return currentTarget.value.length > 0
    ? currentTarget.classList.add('has-input')
    : currentTarget.classList.remove('has-input');
};

const fields = document.querySelectorAll('[data-text-field] input');
fields.forEach(field => field.addEventListener('input', hasInput));
