import React from "react";
import { withRouter } from "react-router";

const MovieCard = (props) => {
  const imgUrl='https://image.tmdb.org/t/p/w500';
  const goToMovie = (event) => {
    event.preventDefault();
    //3. change the page to /store/whatever the have entered
    props.history.push(`/Movie/${props.id}`);
  }
 
  return(
  <li className="o-layout__item u-1/2@sm u-1/3@md">
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
        <div className="c-panel__media">
            <img className='c-panel__img' src={imgUrl+props.poster_path} alt="title" width="310" />
        </div>
      </div>
      <div className="c-panel__bottom">
        <div className="c-panel__headings">
          <h2 className="heading-primary">{props.isSelected?props.title:props.name}</h2>
          <h4 className="heading-primary">{props.isSelected?props.release_date.substring(0,4):props.first_air_date.substring(0,4)}</h4>
        </div>
        <div className="c-panel__category">
          {props.genreNames.map(genre => {
            return <div key={genre.id} className="label">{genre.name}</div>;
          })}
        </div>
        <div className="c-panel__headings">
          <div className="c-panel__note ">
            <span className="c-star">&#9733;</span>
            <span className="c-panel__vote-average c-score c-score--inverse">
              {props.vote_average}
            </span>{" "}
            <span>{`/10`}</span>
          </div>
            <button className="c-btn c-navigation__link" id={props.id} onClick={(event)=>goToMovie(event)}>
              Show
            </button>
        </div>
      </div>
    </div>
  </li>
  );
};

export default withRouter(MovieCard);
