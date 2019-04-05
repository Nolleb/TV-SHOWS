import React, { useState } from "react";
import { withRouter } from "react-router";

const MovieSingleCard = props => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [translateValue, setTranslateValue] = useState(0);
  
  const imgUrl='https://image.tmdb.org/t/p/w500';
  console.log("props");
  console.log(props);
  const movie = props.movie;
  const genres = props.movie.genreNames;
  const casting = props.movie.castingNames;
 
  console.log("casting"); 
  console.log(casting.length);
  //setIndex(Object.keys(casting)[0]);

  const nextSlide = () => {
    
    if(currentIndex === casting.length - 1) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(currentIndex+1);
  }

  const prevSlide = () => {
    if(currentIndex === 0){
      return;
    }
    setCurrentIndex(currentIndex-1);
  }


  return (
    <div className="c-single-card__container shadow">
      <div className="c-single-card__media">
        <img className='c-single-card__img' src={imgUrl+movie.poster_path} alt="title" width="400" />
      </div>
      
      <div className="c-single-card__body">
        <div className="c-single-card__title">{movie.title}</div>
        <h4 className="heading-primary">{movie.release_date.substring(0,4)}</h4>
        <div className="c-panel__note ">
            <span className="c-star">&#9733;</span>
            <span className="c-panel__vote-average c-score c-score--inverse">
              {movie.vote_average}
            </span>{" "}
            <span>{`/10`}</span>
          </div>
        <div className="c-single-card__category">

        {genres.map(elem =><div key={elem.id} className="label">{elem.name}</div>
        )}
        
        </div>
        <div className="c-single-card__overview">{movie.overview}</div>
        <div className="c-single-card__effect">
          <div className={`c-single-card__carousel active-slide-${currentIndex}`}>
            <div className="c-single-card__carousel-wrapper" style={{
              'transform': `translateX(-${currentIndex*(100/casting.length)}%)`
            }}>
              {casting.map((elem,i) =><div key={elem.id}  id={`c-single-card__carousel-item-${i}`} className="c-single-card__carousel-item"><img src={imgUrl+elem.profile_path}></img><div className="c-single-card__name">{elem.name} <br/> <span>{elem.character}</span></div></div>
              )}
            </div>
          </div>
        </div>
        <div className="c-single-card__navigation">
          <button onClick={prevSlide}>&#x276E;</button>
          <button onClick={nextSlide}>&#x276F;</button>
        </div>
      </div>
      
    </div>
  );
};

export default withRouter(MovieSingleCard);
