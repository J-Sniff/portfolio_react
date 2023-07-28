import React from 'react'
import './Portfolio.scss'
// import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState } from 'react'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Portfolio
