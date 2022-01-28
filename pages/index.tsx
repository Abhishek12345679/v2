import useSwr from 'swr'
import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import { currentLocation, makeDayTimeString } from '../helper/helperFunctions'

import { Introduction } from '../components/Introduction'
import { Experience } from '../components/Experience'
import { ThankYou } from '../components/ThankYou'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

const Home: NextPage = () => {
  const { data, error } = useSwr('/api/now-playing', fetcher)

  if (error) console.log(error)
  if (data) console.log(data)

  return (
    <div>
      <Head>
        <title>Abhishek Sah</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="Abhishek sah" content="Personal Website for Abhishek Sah" />
        <link rel="avatar" href="%PUBLIC_URL%/avatar.jpeg" />

      </Head>
      <Navbar
        dayTimeString={makeDayTimeString()}
        currentLocation={currentLocation}
      />
      <Introduction nowPlaying={data} />
      <Experience />
      <ThankYou />
    </div>
  )
}

export default Home