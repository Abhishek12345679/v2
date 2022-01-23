import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { currentLocation, makeDayTimeString } from '../helper/helperFunctions'

import { Introduction } from '../components/Introduction'
import { Experience } from '../components/Experience'
import { ThankYou } from '../components/ThankYou'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Abhee</title>
      </Head>
      <Navbar dayTimeString={makeDayTimeString()} currentLocation={currentLocation} />
      <Introduction />
      <Experience />
      <ThankYou />
    </div>
  )
}

export default Home