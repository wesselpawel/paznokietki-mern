import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signup } from '../../actions/auth';

const initialState = { name: '', email: '', password: '', password2: '', };

function Register() {

  const [formData, setFormData] = useState(initialState)
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const { name, email, password, password2 } = formData
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(formData));
    }
    
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='grid to-right'>
          <input
            type='text'
            className='form-control'
            id='name'
            name='name'
            value={name}
            placeholder='Imię...'
            onChange={handleChange}
          />
          <input
            type='email'
            className='form-control'
            id='email'
            name='email'
            value={email}
            placeholder='Podaj email..'
            onChange={handleChange}
            />
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            value={password}
            placeholder='Wpisz hasło..'
            onChange={handleChange}
           />
           <input
             type='password'
             className='form-control'
             id='password2'
             name='password2'
             value={password2}
             placeholder='Powtórz hasło..'
             onChange={handleChange}
           />
           <div className='checkbox-wrapper'>
             <input className="checkbox" type="checkbox" required />
             <span>Rejestrując się akceptuję regulamin serwisu.</span>
           </div>
           <button className='btn-submit active-button' type='submit'>
             Zarejestruj
           </button>
        </div>
      </form>
    </>
  )
}

export default Register
