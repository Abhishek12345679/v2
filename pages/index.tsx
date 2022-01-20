import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { currentLocation, makeDayTimeString } from '../helper/helperFunctions'

import { faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Abheee
        </title>
      </Head>
      <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
      <section className="introduction">
        <div className="container grid">
          <div className="intro-text">
            <h1>Hi! I'm Abheee.</h1>
            <p className="info-short">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ducimus voluptates temporibus commodi atque assumenda magnam doloremque.
              Exercitationem dolorum recusandae deleniti, atque sint ullam cum!
            </p>
            <p>
              Culpa officiis aliquid accusamus, id repellendus perspiciatis.
              Quo in dolorem sapiente corrupti officiis nam unde quaerat.
            </p>

            <section>
              <ul className="socials-row flex">
                <li>
                  <a
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
                    target='_blank'
                    referrerPolicy='origin'
                    href="https://instagram.com/alooofries"
                  >
                    <FontAwesomeIcon
                      className='social-icon'
                      icon={faInstagram} // ?
                      size="2x"
                    />
                  </a>
                </li>
              </ul>
            </section>

          </div>
          <Image
            className='img'
            src="/images/me2.jpg"
            width={300}
            height={400}
          />
        </div>
      </section>
    </div>
  )
}

export default Home