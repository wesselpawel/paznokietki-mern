import { NavLink } from 'react-router-dom'
import logo from "../../images/logo.png";
import home from "../../images/home.png";
import news from "../../images/news.png";
import announcement from "../../images/announcement.png";
import login from "../../images/login.png";

function Header() {

  return (
                <header>
                    <div className='logo'>
                        <img src={logo} alt='Obraz nie może zostać wyświetlony'/>
                    </div>
                    <nav>
                        <NavLink className='nav-news nav-item' to='news'>
                                <div className='mobile-icon'>
                                    <img src={news} alt='Obraz nie może zostać wyświetlony'/>
                                </div>
                                    <span>AKTUALNOŚCI</span>
                        </NavLink>

                        <NavLink className='nav-home nav-item' to='/'>
                                <div className='mobile-icon'>
                                    <img src={home} alt='Obraz nie może zostać wyświetlony'/>
                                </div>
                                    <span>HOME</span>
                        </NavLink>

                        <NavLink className='nav-announcement nav-item' to='announcements'>
                                <div className='mobile-icon'>
                                    <img src={announcement} alt='Obraz nie może zostać wyświetlony'/>
                                </div>
                                    <span>OGŁOSZENIA</span>
                        </NavLink>
                    </nav>
                        <div className='nav-login'>
                            <NavLink className='nav-login inactive' to='login'>
                            <img src={login} alt='Obraz nie może zostać wyświetlony'/>
                                ZALOGUJ
                            </NavLink>
                        </div>  
                    
                </header>
    );
  }

  
export default Header
