import React from 'react';
import Header from "./Header";
import logo from '../images/logo/logo.svg';
import Main from './Main';
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="page">

      <Header src={logo} alt="логотип отошёл на 5 минут" />
      
      <Main 
       onEditProfile={handleEditProfileClick}
       onAddPlace={handleAddPlaceClick}
       onEditAvatar={handleEditAvatarClick}
       onPictureClick={handleCardClick}
       />

      <Footer text="&#169; 2020 Mesto Russia" />
      
      <PopupWithForm 
      name="profile" 
      title="Редактировать профиль" 
      buttonSubmitText="Сохранить" 
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}>
          
          <input 
          className="popup__input" 
          id="name" name="name" type="text" 
          placeholder="Введите Ваше имя" 
          minLength="2" 
          maxLength="40" 
          required 
          autoComplete="on" />
          
          <label className="popup__input-error name-error" htmlFor="name"></label>
          
          <input 
          className="popup__input" 
          id="about" 
          name="about" 
          type="text" 
          placeholder="Укажите Вашу деятельность" 
          minLength="2" 
          maxLength="200" 
          required />
          
          <label className="popup__input-error about-error" htmlFor="about"></label>

      </PopupWithForm>
      
      <PopupWithForm 
      name="element" 
      title="Новое место" 
      buttonSubmitText="Сохранить" 
      isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups}>
          
          <input 
          className="popup__input" 
          id="title-input" name="name" 
          type="text" 
          placeholder="Название" 
          minLength="2"
          maxLength="30" 
          required />
          
          <label className="popup__input-error title-input-error" htmlFor="title-input"></label>
          
          <input 
          
          className="popup__input" 
          id="link-input" name="link" 
          type="url" 
          placeholder="Ссылка на изображение" 
          required />
          
          <label className="popup__input-error link-input-error" htmlFor="link-input"></label>
          
      </PopupWithForm>

      <PopupWithForm 
      name="changeAvatar" 
      title="Обновить аватар" 
      buttonSubmitText="Сохранить" 
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups}>
          
          <input 
          className="popup__input popup__input_avatar_margin" 
          id="avatar-input" 
          name="avatar" 
          type="url" 
          placeholder="Ссылка на изображение" 
          required />
          
          <label className="popup__input-error avatar-input-error" htmlFor="avatar-input"></label>

      </PopupWithForm>

      <PopupWithForm 
      name="deleteCard" 
      title="Вы уверены?" 
      buttonSubmitText="Да" />

      <ImagePopup 
      name="scale-picture" 
      card={selectedCard} 
      onClose={closeAllPopups} />
    </div>
  );
}

export default App;
