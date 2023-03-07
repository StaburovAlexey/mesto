let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile-info__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#input-name');
let aboutMeInput = document.querySelector('#input-aboutme');
let profileName = document.querySelector('.profile-info__name');
let profileAboutMe = document.querySelector('.profile-info__about-me');

editButton.addEventListener('click', function () { popup.classList.add('popup_active') });
popupButtonClose.addEventListener('click', function () { popup.classList.remove('popup_active') });

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = aboutMeInput.value;

  popup.classList.remove('popup_active');

}

formElement.addEventListener('submit', handleFormSubmit);
