const viewTrolleyLink = document.getElementById("view-trolley-link");
const viewTrolleyButton = document.getElementById("view-trolley");

const hideTrolleyLink = () => {
  viewTrolleyLink.classList.add("sr-only");
  viewTrolleyLink.classList.remove("button");
};

const showTrolleyLink = () => {
  viewTrolleyLink.classList.remove("sr-only");
  viewTrolleyLink.classList.add("button");
};

viewTrolleyLink.addEventListener("blur", hideTrolleyLink);

viewTrolleyLink.addEventListener("focus", showTrolleyLink);

viewTrolleyButton.addEventListener("click", () => {
  alert('trolley overlay opened');
});
