import React from 'react';
import Cards from './Cards';
import api from '../utils/api';



function Main(props) {

  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([user, cards]) => {
        setUserName(user.name);
        setUserDescription(user.about);
        setUserAvatar(user.avatar);
        setCards(cards);
      }) 
      .catch(err => console.log(err));
  }, [])

  return (
    
    <>
    <main className="main">

        <section className="profile">

          <div className="profile__content">

            <div className="profile__avatar" onClick={props.onEditAvatar}>
              <img className="profile__avatar-image" src={userAvatar} alt="тут должно быть ваше изображение" />
            </div>

            <div className="profile__info">

              <h1 className="profile__full-name">{userName}</h1>

              <p className="profile__description">{userDescription}</p>

              <button className="profile__edit-button" name="edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}>
              </button>

            </div>

          </div>

          <button className="profile__add-button" name="add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}>
          </button>

        </section>

        <section className="elements">

          {cards.map((card) => (
            <Cards
            key={card._id} 
            title={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={props.onPictureClick}
            />
          ))}
        </section>
        
      </main>

      </>
  )
}

export default Main;