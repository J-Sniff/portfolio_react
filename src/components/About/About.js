import React from 'react'
import './About.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          As a web developer, I possess a strong blend of technical proficiency
          and creative problem-solving skills. My expertise in various
          programming languages and web development tools allows me to create
          seamless and visually appealing websites. With a keen eye for detail,
          I ensure that my code is clean, efficient, and user-friendly,
          resulting in a smooth user experience. I excel at collaborating with
          designers and team members, communicating effectively to achieve
          successful project outcomes.
        </p>
        <p>
          My passion for continuous learning and adaptability keeps me ahead in
          the dynamic world of web development. I am driven by dedication and
          self-motivation, always putting the user's needs at the forefront of
          my work. My creativity, technical expertise, and user-centric mindset
          make me a valuable asset to any web development team.
        </p>
        <p>
          During my four years of service in the United States Air Force, I had
          the privilege of spending two years in Seoul, South Korea, and another
          two years in Tokyo, Japan. Through my military experience, I've
          developed a strong sense of dedication and a drive for excellence.
          Family values are essential to me, and I consistently prioritize the
          well-being of those around me. My true passion lies in the world of
          technology, which led me to make a career transition from the military
          to becoming a general contractor and, ultimately, pursuing my dream as
          a web developer. I am thrilled about the opportunities in web
          development, and I believe my diverse background and relentless
          pursuit of perfection make me a valuable and dedicated asset for any
          employer.
        </p>
      </div>

      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'> 
            <FontAwesomeIcon icon={faAngular} color='#DD0031' />
          </div>
          <div className='face2'> 
            <FontAwesomeIcon icon={faHtml5} color='#F06529' />
          </div>
          <div className='face3'> 
            <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
          </div>
          <div className='face4'> 
            <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
          </div>
          <div className='face5'> 
            <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
          </div>
          <div className='face6'> 
            <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About


