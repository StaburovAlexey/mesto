import Card from "./Card.js"
import { initialCards, validationConfig } from "./constans.js";
import Validation from "./FormValidator.js";

const cardsContainer = document.querySelector(".foto__list");
const popupImg = document.querySelector(".popup-img");
const popupImgImg = document.querySelector(".popup-img__img");
const popupImgText = document.querySelector(".popup-img__text");
const buttonClosePopupList = document.querySelectorAll(".button-close");
const formAddCard = document.querySelector(".form-add-card");
const placeNameInput = document.querySelector("#input-name-place");
const urlImageInput = document.querySelector("#input-url");
const popupAddCard = document.querySelector(".popup-add-card");
const popupEditProfile = document.querySelector(".popup-edit-profile");
const editProfileButton = document.querySelector(".profile-info__edit-button");
const addCardPopup = document.querySelector(".profile__add-button");
const formEditProfile = document.querySelector(".form-edit-profile");
const nameInput = document.querySelector("#input-name");
const aboutMeInput = document.querySelector("#input-aboutme");
const profileName = document.querySelector(".profile-info__name");
const profileAboutMe = document.querySelector(".profile-info__about-me");
const popupList = document.querySelectorAll(".popup");

const formCardValidation = new Validation(validationConfig, formAddCard);
formCardValidation.enableValidation();

const formProfileValidation = new Validation(validationConfig, formEditProfile);
formProfileValidation.enableValidation();

function creatCard(item) {
  const card = new Card(item,"#template", openPopupImg)
  return card;
  }


function openPopup(popup) {
  popup.classList.add("popup-open");
  document.addEventListener("keydown", closePopupByEscKey);
}

function openPopupImg(card) {
  popupImgImg.src = card.link;
  popupImgImg.alt = card.name;
  popupImgText.textContent = card.name;
  openPopup(popupImg);
}

function closePopup(popup) {
  popup.classList.remove("popup-open");
  document.removeEventListener("keydown", closePopupByEscKey);
}

function closePopupByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}

function closePopupByEscKey(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup-open"));
  }
}

popupList.forEach((item) => {
  item.addEventListener("click", closePopupByOverlay);
});


initialCards.forEach(function (item) {
  cardsContainer.append(creatCard(item).creatCard());
});

buttonClosePopupList.forEach((item) => {
  const popup = item.closest(".popup");
  item.addEventListener("click", () => {
    closePopup(popup);
  });
});

formAddCard.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const cardData = { name: placeNameInput.value, link: urlImageInput.value };
  cardsContainer.prepend(creatCard(cardData).creatCard());
  evt.target.reset();
  closePopup(popupAddCard);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAboutMe.textContent = aboutMeInput.value;
  closePopup(popupEditProfile);
}

function openEditProfilePopup() {
  openPopup(popupEditProfile);

  nameInput.value = profileName.textContent;
  aboutMeInput.value = profileAboutMe.textContent;
  formProfileValidation.resetValidationState();
}

formEditProfile.addEventListener("submit", handleProfileFormSubmit);

editProfileButton.addEventListener("click", openEditProfilePopup);

addCardPopup.addEventListener("click", () => {
  openPopup(popupAddCard);
  formCardValidation.resetValidationState();
});
