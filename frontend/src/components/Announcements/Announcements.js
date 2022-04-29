import React, {useEffect} from 'react';
import Announcement from './Announcement/Announcement';
import { getAnnouncements } from '../../actions/announcements'
import { useDispatch, useSelector } from 'react-redux';
import './Announcements.css'

const Announcements = () => {

  const dispatch = useDispatch();
  const { announcements } = useSelector((state) => state.announcements);
  useEffect(() => {
    dispatch(getAnnouncements());
  }, [dispatch]);
  if (!announcements.length) return 'No posts';

    return(

          
          <ul>
            {announcements.map((announcement) => (
              <li key={announcement._id}>
                <Announcement announcement={announcement} />
              </li>
            ))}
          </ul>
        
        
    );
}

export default Announcements;