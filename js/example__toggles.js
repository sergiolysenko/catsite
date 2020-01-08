var buttonBefore = document.querySelector(".example__toggle-one");
var buttonAfter = document.querySelector(".example__toggle-two");
var catBefore = document.querySelector(".example__cat-image--before");
var catAfter = document.querySelector(".example__cat-image--after");

buttonAfter.addEventListener("click", function() {
  if (buttonBefore.classList.contains("example__toggle--before")
    && catAfter.classList.contains("example__hide")) {
    buttonBefore.classList.remove("example__toggle--before");
    catAfter.classList.remove("example__hide");
    buttonAfter.classList.add("example__toggle--after");
    catBefore.classList.add("example__hide");
  }
})

buttonBefore.addEventListener("click", function() {
  if (buttonAfter.classList.contains("example__toggle--after")
    && catBefore.classList.contains("example__hide")) {
    buttonAfter.classList.remove("example__toggle--after");
    catBefore.classList.remove("example__hide");
    buttonBefore.classList.add("example__toggle--before");
    catAfter.classList.add("example__hide");
  }
})
