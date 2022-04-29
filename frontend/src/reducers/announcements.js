
import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = { announcements: [] }, action) => {
    switch (action.type) {
        case 'START_LOADING':
            return { ...state, isLoading: true };
        case 'END_LOADING':
            return { ...state, isLoading: false };
        case FETCH_ALL:
            return{
                ...state,
                announcements: action.payload.data,
        }
        case CREATE:
            return { ...state, announcements: [...state.announcements, action.payload] };
        case DELETE:
            return { ...state, announcements: state.announcements.filter((announcement) => announcement._id !== action.payload) };
    default:
        return state;
    }
};