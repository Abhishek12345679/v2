import { Temporal } from '@js-temporal/polyfill'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import { currentLocation, makeDayTimeString } from '../helper/helperFunctions'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Abhishek Sah
        </title>
      </Head>
      <Navbar currentLocation={currentLocation} dayTimeString={makeDayTimeString()} />
      <div className="main-container">
        <div className='intro'>
          <div className='intro-text'>
            <h1>
              Hey, I'm Abhishek {" "}
              <span className="light-text">
                (he/him)
              </span>
            </h1>
            <p className='desc'>
              I am a self-taught App Developer based in India. <br /><br />
              I freelance sometimes, primarily in React Native w/ Typescript but i am learning Kotlin and learning Web Dev while making this website with NextJS.
            </p>
          </div>
          <div className="image-wrapper">
            <Image
              className='me-image'
              src="/images/me2.jpg"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home