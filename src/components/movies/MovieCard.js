import React from "react";
const url='https://image.tmdb.org/t/p/w500';
const MovieCard = (props) => (
  <li className="o-layout__item">
    <div className="c-panel shadow">
      <div className="c-panel__favorite">
        <span>&#10084;</span>
      </div>
      <div className="c-panel__top">
        <a href="#" className="c-panel__link">
          <div className="test">
            <div className="o-media__body c-panel__content">
              <p className="c-panel__paragraph">{props.overview}</p>
            </div>
          </div>
        </a>

        <div className="o-media">
          <div className="o-media__img">
            <img src={url+props.poster_path} alt="title" width="310" />
          </div>
        </div>
      </div>
      <div className="c-panel__bottom">
        <h2 className="heading-primary">{props.title}</h2>
        <div className="c-panel__headings">
          <div className="c-panel__note ">
            <span className="c-star">&#9733;</span>
            <span className="c-panel__vote-average c-score c-score--inverse">
              {props.vote_average}
            </span>{" "}
            <span>{`/10`}</span>
          </div>
          <h4 className="heading-primary">{props.release_date}</h4>
          <span>{props.genre_ids[0]}</span>
        </div>
      </div>
    </div>
  </li>
);

export default MovieCard;
