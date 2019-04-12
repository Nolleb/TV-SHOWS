import React, {useState} from "react";
import { withRouter } from "react-router";
import PropTypes from "prop-types";

const MovieCard = ({
  id,
  history,
  overview,
  poster_path,
  genreNames,
  title,
  name,
  isSelected,
  vote_average,
  first_air_date,
  release_date

}) => {
  const [toggle, setToggle] = useState(false);

  const imgUrl='https://image.tmdb.org/t/p/w500';

  const addToFavorites = e => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const goToMovie = (event) => {
    event.preventDefault();
    //3. change the page to /store/whatever the have entered
    history.push(`/Movie/${id}`);
  }
 
  return(
  <li className="o-layout__item u-1/2@sm u-1/3@md">
    <div className="c-panel shadow">
      <div className={`${"c-panel__favorite"} ${toggle ? "active" : ""}`} onClick={e => addToFavorites(e)}><span>&#10084;</span></div>
      <div className="c-panel__top">
        <a href="#" className="c-panel__link">
          <div className="test">
            <div className="o-media__body c-panel__content">
              <p className="c-panel__paragraph">{overview}</p>
            </div>
          </div>
        </a>
        <div className="c-panel__media">
            <img className='c-panel__img' src={imgUrl+poster_path} alt="title" width="310" />
        </div>
      </div>
      <div className="c-panel__bottom">
        <div className="c-panel__headings">
          <h2 className="heading-primary">{isSelected?title:name}</h2>
          <h4 className="heading-primary">{isSelected?release_date:first_air_date}</h4>
        </div>
        <div className="c-panel__category">
          {genreNames.map(genre => {
            return <div key={genre.id} className="label">{genre.name}</div>;
          })}
        </div>
        <div className="c-panel__headings">
          <div className="c-panel__note ">
            <span className="c-star">&#9733;</span>
            <span className="c-panel__vote-average c-score c-score--inverse">
              {vote_average}
            </span>{" "}
            <span>{`/10`}</span>
          </div>
            <button className="c-btn c-navigation__link" id={id} onClick={(event)=>goToMovie(event)}>
              Show
            </button>
        </div>
      </div>
    </div>
  </li>
  );
};

MovieCard.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(MovieCard);
