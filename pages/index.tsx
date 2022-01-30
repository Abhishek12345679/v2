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
        <meta name='description' content="Homepage of my personal website which houses a short description and my experience." />

        {/* Twitter Summary Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@newbdev6969" />
        <meta name="twitter:creator" content="@newbdev6969" />
        <meta name="twitter:title" content="Abhishek Sah" />
        <meta name="twitter:description" content="Homepage of my personal website which houses a short description and my experience." />
        <meta name="twitter:image" content="public/favicon-32x32.png" />
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