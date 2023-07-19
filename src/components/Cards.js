import React from 'react';

function Cards(props) {

  function handleClick() {
    props.onCardClick(props);
  }  

  return(
  <>
    <article className="element">
      
      <button className="element__delete" name="delete-btn" type="button" aria-label="Удалить"></button>
      
        <img className="element__image" src={props.link} alt="Фотокарточка" onClick={handleClick} />
        
        <div className="element__content">
          
            <h2 className="element__title">{props.title}</h2>
              <div className="element__likeBtn">
                <button className="element__button" name="like-btn" type="button" aria-label="Нравится">
                </button>
                <div className="element__counter-like">{props.likes.length}</div>
              </div>
        </div>
    
    </article>
    
  </>
  )
}

export default Cards;