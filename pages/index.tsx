import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <head>
        <title>
          Abhishek Sah
        </title>
      </head>
      <Navbar />
      <div className="main-container">

      </div>
    </div>
  )
}

export default Home