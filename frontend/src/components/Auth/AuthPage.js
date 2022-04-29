import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';
import { signin } from '../../actions/auth';
import '../../styles/_authPage.scss'
import eye from '../../images/eye-transparent-white.png'
import eyeslash from '../../images/eye-slash-transparent-white.png'
import PasswordStrengthBar from 'react-password-strength-bar';
import checksign from '../../images/check-sign.png'

function AuthPage() {

    //check which view should be rendered
    const [choosenOption, setchoosenOption] = useState({
        choosen: 'login',
    })
    const { choosen } = choosenOption

    //handle visibiliy of password
    const [showPass, setPassVisibility] = useState(false)
    const eyeHandler = () => {
        setPassVisibility(current => !current)
      }
    useEffect( () => {
    }, [showPass]);

    //store data to handle user request
    const [formData, setFormData] = useState({
         name: '', email: '', password: '', repeatPassword: ''
    })
    //floating labels
    const [floating, isFloating] = useState([])
    const { name, email, password, repeatPassword } = formData

    //handle user request either its login or register
    const dispatch = useDispatch();
   
    const onSubmit = (e) => {
      e.preventDefault()
       // eslint-disable-next-line
        {choosen==='register' ? (
          dispatch(signup(formData))
        ) : (
          dispatch(signin(formData))
        )}
      }

    //handle change
    function change (e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return(
        <>
        <div className="background-auth"/>
            <div className="wrapper">
                <div className="form-wrapper">
                    <div className="buttons">
                        <button 
                            onClick={() => setchoosenOption({ ...choosenOption, choosen: 'login' })}
                            className={choosen === 'login' ? 'nav-btn active-button' : 'nav-btn'}>
                            LOGOWANIE
                        </button>
                        <button
                            onClick={() => setchoosenOption({ ...choosenOption, choosen: 'register' })}
                            className={choosen === 'register' ? 'nav-btn active-button' : 'nav-btn'}>
                            REJESTRACJA
                        </button>
                    </div>
                    <form onSubmit={onSubmit}>
                        {choosen === 'register' ? (
                        <div className="input-area">
                            <label
                                className={floating.name===true || formData.name ? 'floated label' : 'label'}
                                htmlFor="name"
                            >Imię</label>
                            <input
                                id="name"
                                type='text'
                                name='name'
                                value={name}
                                onClick={() => isFloating({...floating, name:true})}
                                onBlur={() => isFloating({...floating, name:false})}
                                onChange={change}
                            />
                        </div>
                        ) : (
                            null
                        )}
                        <div className="input-area">
                            <label 
                                htmlFor="email"
                                className={floating.email===true || formData.email ? 'floated label' : 'label'}
                            >Email</label>
                            <input
                                id="email"
                                type='email'
                                name='email'
                                value={email}
                                onClick={() => isFloating({...floating, email:true})}
                                onBlur={() => isFloating({...floating, email:false})}
                                onChange={change}
                            />
                        </div>
                        <div className="input-area">
                            <label 
                                htmlFor="password"
                                className={floating.password===true || formData.password ? 'floated label' : 'label'}
                            >Hasło</label>
                            <input
                                id="password"
                                type={showPass === true ? 'text' : 'password'}
                                name='password'
                                value={password}
                                onClick={() => isFloating({...floating, password:true})}
                                onBlur={() => isFloating({...floating, password:false})}
                                onChange={change}
                            />
                            {choosen === 'register' && formData.password ? (
                                <PasswordStrengthBar
                                    password={password}
                                    minLength={6}
                                    minScore={2}
                                    scoreWords={['Bardzo słabe', 'Bardzo słabe', 'Dobre', 'Bardzo dobre', 'Wystarczająco silne']}
                                    shortScoreWord='Zbyt krótkie'
                                />
                            ) : (
                                null
                            )}
                            <div 
                            onClick={eyeHandler}
                            className="eye">
                                {showPass === false ? 
                                (
                                    <img src={eye} alt="" />
                                ) : (
                                    <img src={eyeslash} alt=""
                                    />
                                )}
                            </div>
                            
                        </div>
                        {choosen === 'register' ? (
                        <div className="input-area">
                            <label 
                                htmlFor="repeatPassword"
                                className={floating.repeatPassword===true || formData.repeatPassword ? 'floated label' : 'label'}
                            >Powtórz Hasło</label>
                            <input
                                id="repeatPassword"
                                type={showPass === true ? 'text' : 'password'}
                                name='repeatPassword'
                                value={repeatPassword}
                                onClick={() => isFloating({...floating, repeatPassword:true})}
                                onBlur={() => isFloating({...floating, repeatPassword:false})}
                                onChange={change}
                            />
                            {formData.password !== formData.repeatPassword && formData.repeatPassword ? (
                                <span>Hasła nie są takie same</span>
                            ) : (
                                null
                            )}
                            {formData.password === formData.repeatPassword && formData.repeatPassword ? (
                            <div className='pass-success'><img src={checksign} alt=""/>Hasła są takie same</div>
                            ) : (
                                null
                            )}
                        </div>
                        ) : (
                            null
                        )}
                        {choosen === 'register' ? (
                        <div className="bottom">
                            <div className='checkbox-wrapper'>
                                    <input className="checkbox" id="checkbox" type="checkbox" required />
                                    <label htmlFor="checkbox">Rejestrując się akceptuję regulamin serwisu.</label>
                            </div>
                            <button className="register-btn" type="submit" ons>Zarejestruj</button>
                        </div>
                        ) : (
                            <div className="bottom">
                                <span className="recover">Odzyskaj hasło</span>
                                <button className="login-btn" type="submit">Zaloguj</button>
                            </div>
                        )}
                    </form>
                </div> 
            </div>
        </>
    )
}

export default AuthPage