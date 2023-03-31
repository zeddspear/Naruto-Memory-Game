import React from 'react'
import Logo from '../assets/HeaderImges/Logo.png'
import Logoleft from '../assets/HeaderImges/Logo_left.png'
import Logoright from '../assets/HeaderImges/Logo_right.png'

function Header({score,highestScore}) {

  return (
    <div className='Header'>
      <div className='headImgs' >
        <img className='logo_left' src={Logoleft} alt='Game Logo left'/>
        <img className='logo' src={Logo} alt='Game Logo Image'/>
        <img className='logo_right' src={Logoright} alt='Game Logo right'/>
      </div>
      <div className='GameScoreDiv' >
        <span className='score'>Your Score: {score}</span>
        <span className='score'>Highest Score: {highestScore}</span>
        <span className='score'>Max Score: 18</span>
      </div>
    </div>
  )

}

export default Header
