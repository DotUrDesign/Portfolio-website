import { useEffect, useState } from 'react'
import {
    faStackOverflow,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  })

  return (
    <>
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
            I'm a very ambitious web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            <ul>
                <li>Institute Rank 3 at <a href='https://auth.geeksforgeeks.org/user/pratyush797' ><font color="red">GFG</font></a>. Solved 450+ Questions on GFG.</li>
                <li>3⭐ at <a href='https://www.codechef.com/users/pratyush_code' ><font color="red">Codechef</font></a>. Max Rating : 1723</li>
                <li>Solved 300+ Questions on <a href='https://leetcode.com/Pratyush_Sahoo/' ><font color="red">Leetcode</font></a>.</li>
                <li>Secured 196 rank on Codechef Starters 71 contest among 15K+ candiates.</li>
                <li>Max Rating of 1229 on <a href='https://codeforces.com/profile/Pratyush_sahoo' ><font color="red">Codeforces</font></a>. Solved 500+ Questions.</li>
            </ul>
          </p>
          <p>
            Worked on multiple projects of Web Development.
            <ul>
                <li>Fitgenix(<a href='https://behealthy92.netlify.app/'><font color="red">Link</font></a>) - A Fitness App that have the functionality to choose exercise categories and specific muscle groups, browse more than thousand exercises</li>
                <li>Playerify(<a href='https://harmonious-gnome-fa4b7e.netlify.app/'><font color="red">Link</font></a>) -A hassle-free , easy to use and free video player.</li>
                <li>Weather App(<a href='https://sage-zuccutto-ad6a06.netlify.app/'><font color="red">Link</font></a>) -Search for accurate weather conditions of any location.</li>
            </ul>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faStackOverflow} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
