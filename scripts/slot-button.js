const changeSlotButton = document.getElementById('changeSlotButton');
const slotDetails = document.getElementById('slot-info');
const slotInfoButton = document.getElementById('view-slot');

const hideSlotDetails = () => slotDetails.classList.add("sr-only");
const showSlotDetails = () => slotDetails.classList.remove("sr-only");

changeSlotButton.addEventListener("blur", hideSlotDetails);

changeSlotButton.addEventListener("focus", showSlotDetails);

slotInfoButton.addEventListener("click", () => {
  if (slotDetails.classList.contains("sr-only")) {
    showSlotDetails();
  } else {
    hideSlotDetails();
  }
});
