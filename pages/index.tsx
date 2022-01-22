import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { currentLocation, makeDayTimeString } from '../helper/helperFunctions'

import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Abhee
        </title>
      </Head>
      <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
      <section className="introduction">
        <div className="container-body flex">
          <div className="intro-text">
            <h3>Hi! My Name is </h3>
            <h1>Abhishek Sah</h1>
            <h2 className='bold subtitle'>
              I love solving problems and abandoning them.
            </h2>
            <h3 className='regular'>
              I am a self-taught <span className='react-native'>React Native</span> Developer solving real life problems one by one.
              {/* <br /> <br /> */}
              <span>
                {" "}I am creating this website as a way to showcase the projects i have worked on and learn Browser Oriented Web Development.
              </span>
            </h3>
            {/* <Image
              className='img me-img'
              src="/images/me.jpg"
              width={400}
              height={400}
            /> */}
            {/* <h3 className="info-short regular">
              I am creating this website as a way to showcase the projects i have worked on and learn Browser Oriented Web Development.
            </h3> */}
            <section>
              <ul className="socials-row flex">
                <li>
                  <a
                    title='Follow me on Github!'
                    target='_blank'
                    referrerPolicy='origin'
                    href="https://github.com/Abhishek12345679"
                  >
                    <FontAwesomeIcon
                      className='social-icon'
                      icon={faGithub} // ?
                      size="2x"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title='You will be disappointed!'
                    target='_blank'
                    referrerPolicy='origin'
                    href="https://twitter.com/newbdev6969"
                  >
                    <FontAwesomeIcon
                      className='social-icon'
                      icon={faTwitter} // ?
                      size="2x"
                    />
                  </a>
                </li>
                <li>
                  <a
                    title='Sike No Photos!'
                    target='_blank'
                    referrerPolicy='origin'
                    href="https://instagram.com/abhee.tsx"
                  >
                    <FontAwesomeIcon
                      className='social-icon'
                      icon={faInstagram} // ?
                      size="2x"
                    />
                  </a>
                </li>
                <a
                  className='btn-outline'
                  href='mailto:sah755146@gmail.com'
                >
                  Email me
                </a>
              </ul>
            </section>

          </div>

        </div>
      </section>
    </div>
  )
}

export default Home