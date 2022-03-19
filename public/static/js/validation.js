let formElem = document.querySelector('.section__form');
let nameElem = document.querySelector('#name');
let feedbackElem = document.querySelector('#feedback');
let emailElem = document.querySelector('#email');


formElem.addEventListener("submit", event => {
  let name = nameElem.value
  let feedback = feedbackElem.value
  let email = emailElem.value

  if (name.length < "2") {
    event.preventDefault();
    nameElem.classList.add("invalid");
  } else {
    nameElem.classList.remove("invalid");
    nameElem.classList.add("valid");
  }

  if (feedback.length < "4") {
    event.preventDefault();
    feedbackElem.classList.add("invalid");
  } else {
    feedbackElem.classList.remove("invalid");
    feedbackElem.classList.add("valid");
  }

  if (email.length < "4") {
    event.preventDefault();
    emailElem.classList.add("invalid");
  } else {
    emailElem.classList.remove("invalid");
    emailElem.classList.add("valid");
  }
})
