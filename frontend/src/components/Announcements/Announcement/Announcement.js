import React from 'react';
import { deleteAnnouncement } from '../../../actions/announcements';
import { useDispatch } from 'react-redux';
const Announcement = ( {announcement} ) => {
  const dispatch = useDispatch();


    return(
      <div className="announcement-wrapper">
          <h2>Tytuł ogłoszenia: {announcement.title}</h2>
          <h2>Autor: {announcement.author}</h2>
          <img src={announcement.selectedFile} alt=""/>
          <br/>
          <button onClick={() => dispatch(deleteAnnouncement(announcement._id))}>
           USUŃ OGŁOSZENIE
          </button>
          <p>Opis:{announcement.description}</p>
      </div>  
    );
}

export default Announcement;