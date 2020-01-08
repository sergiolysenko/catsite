var inputName = document.querySelector(".form-main__input--cat-name");
var inputWeight = document.querySelector(".form-main__input--weight");
var inputEmail = document.querySelector(".form-main__input--email");
var inputTel = document.querySelector(".form-main__input--tel");
var formButton = document.querySelector(".form-main__button")

formButton.addEventListener("click", function (evt) {

    if (!inputName.value) {
      inputWeight.classList.add("form-main__input--invalid");
    }

    if (!inputWeight.value) {
      inputWeight.classList.add("form-main__input--invalid");
    }

    if (!inputEmail.value) {
        inputEmail.classList.add("form-main__input--invalid");
    }

    if (!inputTel.value) {
        inputTel.classList.add("form-main__input--invalid");
    }
});

inputName.addEventListener("input", function (evt) {
  if (inputName.value) {
    inputName.classList.remove("form-main__input--invalid");
  }
});

inputWeight.addEventListener("input", function (evt) {
  if (inputWeight.value) {
    inputWeight.classList.remove("form-main__input--invalid");
  }
});

inputEmail.addEventListener("input", function (evt) {
  if (inputEmail.value) {
    inputEmail.classList.remove("form-main__input--invalid");
  }
});

inputTel.addEventListener("input", function (evt) {
  if (inputTel.value) {
    inputTel.classList.remove("form-main__input--invalid");
  }
});
