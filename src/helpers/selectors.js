import {createSelector} from 'reselect';
import initialState from '../redux/reducers/initialState';

const getAllFavorites = (state = initialState.favorites) => state.map(movie=>{
    return {...movie, isFavorite: true}
})

export const makeGetAllFavorites = () => createSelector (
    [getAllFavorites],
    (state)=>({state})
)