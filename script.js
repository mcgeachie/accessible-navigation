const toggleHidden = (button, element) => {
  const expanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", !expanded);

  if (expanded) {
    element.setAttribute("hidden", true);
  } else {
    element.removeAttribute("hidden");
  }
};

const bindToggling = (button, element) => {
  const toggle = () => toggleHidden(button, element);

  button.addEventListener("keydown", (event) => {
    if (event.keyCode === 40) toggle;
  });

  button.addEventListener("click", toggle);
};

// mega-menu button
bindToggling(
  document.getElementById("mega-menu-button"),
  document.getElementById("mega-menu")
);

// sign-in button
bindToggling(
  document.getElementById("sign-in"),
  document.getElementById("sign-in-form")
);

// account details
bindToggling(
  document.getElementById("account-details"),
  document.getElementById("account-actions")
);

[1, 2, 3].forEach((key) => {
  const button = document.getElementById(`browse-category-${key}-button`);
  const list = document.getElementById(`browse-category-${key}`);

  bindToggling(
    document.getElementById(`browse-category-${key}-button`),
    document.getElementById(`browse-category-${key}`)
  );
});

((slotBookingControl) =>
  slotBookingControl.addEventListener("click", () => {
    const bookASlot = document.getElementById("book-a-slot");
    const slotDetails = document.getElementById("view-slot");

    if (bookASlot.getAttribute("hidden")) {
      bookASlot.removeAttribute("hidden");
      slotDetails.setAttribute("hidden", true);
      slotBookingControl.textContent = "Book slot";
    } else {
      slotDetails.removeAttribute("hidden");
      bookASlot.setAttribute("hidden", true);
      slotBookingControl.textContent = "Remove slot";
    }
  }))(document.getElementById("slot-booked-control"));

((authenticationControl) =>
  authenticationControl.addEventListener("click", () => {
    const signIn = document.getElementById("unauthenticated");
    const accountDetails = document.getElementById("authenticated");

    if (signIn.getAttribute("hidden")) {
      signIn.removeAttribute("hidden");
      accountDetails.setAttribute("hidden", true);
      authenticationControl.textContent = "Sign-in";
    } else {
      accountDetails.removeAttribute("hidden");
      signIn.setAttribute("hidden", true);
      authenticationControl.textContent = "Sign-out";
    }
  }))(document.getElementById("authentication-control"));

document.getElementById("styles-control").addEventListener("click", () => {
  document.body.classList.toggle("styled");
});
