import React from 'react'
import '../../css/home.css'
import logo from '../../resources/images/blackjack_logo.png'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className='container'>
      <img className='logo' src={logo} alt="blackjack logo"/>

      <h1 className='title'>Bienvenido a mi blackjack</h1>
      
      <ul className='menu'>
        <li className='link-to'><Link to='/play'>Jugar</Link></li>
        <li className='link-to'><Link to='/how'>Cómo jugar</Link></li>
        <li className='link-to'><Link to='https://catrielnanthaveth.github.io'>Créditos</Link></li>
      </ul>

    </div>
  )
}
