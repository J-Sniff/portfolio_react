import React from 'react'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './Home.scss';

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm
            <img src={LogoTitle} alt="developer" />
            niff
            <br />
            web developer
            </h1>
            <h2>Frontend Developer / JavaScript / React</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>

    </div>
  )
}

export default Home