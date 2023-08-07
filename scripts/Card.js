export default class Card {
  constructor(card, template, openImgPopup) {
    this._card = card;
    this._template = template;
    this._openImgPopup = openImgPopup;
  }

  _creatTemplateClone() {
    const cardElement = document
      .querySelector(this._template)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  _eventListener() {
    this._like.addEventListener("click", () => {
      this._like.classList.toggle("element__button-like_active");
    });

    this._trash.addEventListener("click", () => {
      this._cloneElement.remove();
    });

    this._image.addEventListener("click", () => {
      this._openImgPopup(this._card);
    });
  }

  creatCard() {
    this._cloneElement = this._creatTemplateClone();
    this._image = this._cloneElement.querySelector(".element__img");
    this._like = this._cloneElement.querySelector(".element__button-like");
    this._trash = this._cloneElement.querySelector(".element__button-delete");
    this._nameCard = this._cloneElement.querySelector(".element__name");
    this._image.src = this._card.link;
    this._image.alt = this._card.name;
    this._nameCard.textContent = this._card.name;

    this._eventListener();

    return this._cloneElement;
  }
}
