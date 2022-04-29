import { FETCH_ALL, CREATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators

export const getAnnouncements = () => async (dispatch) => {
        try{
            const { data: { data } } = await api.fetchAnnouncements();
            dispatch({ type: FETCH_ALL, payload: { data } });

        } catch (error) {
            console.log(error.message)
        }
}

export const createAnnouncement = (newAnnouncement) => async (dispatch) => {
    try {

        const { data } = await api.createAnnouncement(newAnnouncement);

        dispatch({ type: CREATE, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deleteAnnouncement = (id) => async (dispatch) => {
    try {
      await await api.deleteAnnouncement(id);
  
      dispatch({ type: DELETE, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
  