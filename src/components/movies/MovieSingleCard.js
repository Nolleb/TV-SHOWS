import React from "react";
import { withRouter } from "react-router";

const MovieSingleCard = props => {
  const imgUrl='https://image.tmdb.org/t/p/w500';
  console.log("props");
  console.log(props);
  const movie = props.movie;
  const genres = props.movie.genreNames;
  const casting = props.movie.castingNames;
  //const isSelected = props.isSelected;

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
        <div className="c-single-card__carousel">
        {casting.map(elem =><div key={elem.id} className="c-single-card__carousel-item"><img src={imgUrl+elem.profile_path}></img><div className="c-single-card__name">{elem.name} <br/> <span>{elem.character}</span></div></div>
        )}
        </div>
      </div>
    </div>
  );
};

export default withRouter(MovieSingleCard);
