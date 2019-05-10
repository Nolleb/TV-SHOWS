import {createSelector} from 'reselect';

const getAllFavorites = (state) => state.favorites;

const getAllMovies = (state) => state.movies;

const getAllGenres = (state) => state.genres;

const getAllTVShows =(state) => state.tvShows;

export const makeGetAllFavorites = createSelector (
    [getAllFavorites],
    (allFavorites)=>allFavorites.map(favorite=>{
        return {...favorite, isFavorite: true}
    })
)

export const makeGetAllMovies  = createSelector (
    [getAllMovies, getAllFavorites, getAllGenres],
    (allMovies, allFavorites, allGenres)=>allMovies.map(movie=>{
        return {...movie, isFavorite: allFavorites.some(favorite => movie.id===favorite.id),
            genreNames: allGenres.filter(genre =>
                movie.genre_ids.includes(genre.id)) }
    })
)

export const makeGetAllTVShows  = createSelector (
    [getAllTVShows, getAllFavorites, getAllGenres],
    (allTVShows, allFavorites, allGenres)=>allTVShows.map(movie=>{
        return {...movie, isFavorite: allFavorites.some(favorite => movie.id===favorite.id),
            genreNames: allGenres.filter(genre =>
                movie.genre_ids.includes(genre.id)) }
    })
)