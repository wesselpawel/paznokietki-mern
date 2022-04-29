import React from 'react'
import { NavLink } from 'react-router-dom'
function Home() {


  return (
  
  <>
    <div className='background-home'></div>
    <div className='layout'>
      <div className='headlines'>
          <h1 className='title-headline'>Paznokietki</h1>
          <h3 className='middle-headline'>Wszystkie usługi kosmetyczne osób prywatnych i salonów w jednym miejscu.</h3>
          <div className='invitation'>
            <h3>Dodaj swoje pierwsze ogłoszenie już dziś!</h3>
            <NavLink to='/login' className='invitation-button'>Dołącz!</NavLink>
          </div>
      </div>
    </div>
    
  </>
  )
}

export default Home