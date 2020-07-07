const accountDetailsButton = document.getElementById("account-details");
const accountDetails = document.getElementById("account-actions");
const signInButton = document.getElementById("sign-in");
const signInForm = document.getElementById("sign-in-form");
const signInLink = document.getElementById("sign-in-link");

const hideSignInLink = () => {
  signInLink.classList.add("sr-only");
  signInLink.classList.remove("nav-item");
};

const showSignInLink = () => {
  signInLink.classList.remove("sr-only");
  signInLink.classList.add("nav-item");
};

signInLink.addEventListener("blur", hideSignInLink);

signInLink.addEventListener("focus", showSignInLink);

signInButton.addEventListener("click", () => {
  const hidden = signInForm.getAttribute("hidden");
  
  if (hidden === "true" || hidden === '') {
    signInForm.removeAttribute("hidden");
  } else {
    signInForm.setAttribute("hidden", true);
  }
});

const hideAccountDetails = () => {
  accountDetails.classList.add("sr-only");
};

const showAccountDetails = () => {
  accountDetails.classList.remove("sr-only");
};

accountDetailsButton.addEventListener("click", () => {
  const hidden = accountDetails.classList.contains("sr-only");

  if (hidden) {
    showAccountDetails();
  } else {
    hideAccountDetails();
  }
});
