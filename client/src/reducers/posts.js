// Reducer is a function or equivalent to a function that accepts a state and also accepts an action. 
// In reducers, the state always has to be set to some value. It cannot be nothing.
import { FETCH_ALL, DELETE, UPDATE, CREATE } from '../constants/actionTypes';


export default (posts = [], action) => {
    switch(action.type) {
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post)
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [ ...posts, action.payload];
        default:
            return posts;
    }
}