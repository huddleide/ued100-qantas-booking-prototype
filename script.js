// This code is used to open and close the mobile navigation menu.
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

// This section controls the booking form behaviour.
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");
const returnDate = document.getElementById("returnDate");
const tripOptions = document.querySelectorAll('input[name="trip"]');

// This checks whether the user selected one-way or return.
// If one-way is selected, the return date is disabled.
tripOptions.forEach(function(option) {
  option.addEventListener("change", function() {
    if (this.value === "oneway") {
      returnDate.disabled = true;
      returnDate.value = "";
    } else {
      returnDate.disabled = false;
    }
  });
});

// This validates the booking form when the user clicks submit.
bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();
  const depart = document.getElementById("depart").value;

  // If any main field is empty, show an error message.
  if (from === "" || to === "" || depart === "") {
    bookingMessage.textContent = "Please fill in all booking details.";
    return;
  }

  // This checks that the departure and destination are not the same.
  if (from.toLowerCase() === to.toLowerCase()) {
    bookingMessage.textContent = "Departure and destination cannot be the same.";
    return;
  }

  // If everything is correct, show a success message.
  bookingMessage.textContent = "Your flight search has been submitted successfully.";
});

// This section handles the support form.
const supportForm = document.getElementById("supportForm");
const supportMessage = document.getElementById("supportMessage");

supportForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // If any important support field is empty, show an error message.
  if (name === "" || email === "" || message === "") {
    supportMessage.textContent = "Please complete the support form before submitting.";
    return;
  }

  // If the form is completed, show a confirmation message.
  supportMessage.textContent = "Your enquiry has been sent successfully.";
});