import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import News from './components/News/News';
import AuthPage from './components/Auth/AuthPage';
import Announcements from './components/Announcements/Announcements'
import Header from './components/Header/Header'
import './styles/styles.scss'


    //<Route path="/announcements/:id" exact component={PostDetails} />
    //<Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/announcements" />)} />
    //<Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
    //<Route path="/announcements/search" exact component={Home} />
const App = () => {
    //const user = JSON.parse(localStorage.getItem('profile'));

    return(
      
      <Router>
        
        <Header/>
        
        <Routes>
        
            <Route path="/" element={<Home/>} />
            <Route path="/announcements" element={<Announcements/>} />
            <Route path="/announcements/:id" element={<Announcements/>} />
            <Route path="/news" exact element={<News/>} />
            <Route path="/login" element={<AuthPage/>} />
        </Routes>

        </Router>
    );
}

export default App;