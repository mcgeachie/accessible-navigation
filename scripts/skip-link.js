const skipLink = document.getElementById("skip-link");

const hideSkipLink = () => {
  skipLink.classList.remove('skip-link');
  skipLink.classList.add('sr-only');
};

const showSkipLink = () => {
  skipLink.classList.add('skip-link');
  skipLink.classList.remove('sr-only');
};

skipLink.addEventListener('focus', showSkipLink);

skipLink.addEventListener('blur', hideSkipLink);
