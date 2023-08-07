export default class FormValidator {
  constructor(validationConfig, form) {
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._errorClass = validationConfig.errorClass;
    this._formSubmitBtn = form.querySelector(this._submitButtonSelector);
    this._formInputList = form.querySelectorAll(this._inputSelector);
    this._form = form;
  }

  _makeInputValid(inputContainerError, input) {
    input.classList.remove(this._inputErrorClass);
    inputContainerError.textContent = "";
  }

  _makeInputInvalid(inputContainerError, input) {
    input.classList.add(this._inputErrorClass);
    inputContainerError.textContent = input.validationMessage;
  }

  _checkInputValidity(input) {
    const inputContainerError = this._form.querySelector(`#${input.id}-error`);
    if (input.validity.valid) {
      this._makeInputValid(inputContainerError, input);
    } else {
      this._makeInputInvalid(inputContainerError, input);
    }
  }

  _enableBtn() {
    this._formSubmitBtn.classList.remove(this._inactiveButtonClass);
    this._formSubmitBtn.removeAttribute("disabled", true);
  }

  _disableBtn() {
    this._formSubmitBtn.classList.add(this._inactiveButtonClass);
    this._formSubmitBtn.setAttribute("disabled", true);
  }

  _hasValidInput() {
    return Array.from(this._formInputList).every(
      (input) => input.validity.valid
    );
  }

  _toggleBtnState() {
    if (this._hasValidInput()) {
      this._enableBtn();
    } else {
      this._disableBtn();
    }
  }

  _setEventListeners() {
    this._formInputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._checkInputValidity(input);
        this._toggleBtnState();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidationState() {
    this._formInputList.forEach((input) => {
      const inputContainerError = this._form.querySelector(
        `#${input.id}-error`
      );
      if (input.validity.valid) {
        this._makeInputValid(inputContainerError, input);
      }
    });
    this._disableBtn();
  }
}
