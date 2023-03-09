let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile-info__edit-button');
let popupButtonClose = document.querySelector('.popup__button-close');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('#input-name');
let aboutMeInput = document.querySelector('#input-aboutme');
let profileName = document.querySelector('.profile-info__name');
let profileAboutMe = document.querySelector('.profile-info__about-me');

function closePopup() {
  popup.classList.remove('popup_active');
}
function openPopup() {
  popup.classList.add('popup_active');
}
function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = aboutMeInput.value;

  closePopup();

}

editButton.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
