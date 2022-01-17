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
        <div className='intro'>
          <h1>
            Hey, I'm Abhishek Sah.
          </h1>
          <p>
            My Pronouns are he/him
          </p>
          <p className='desc'>
            I am a self-taught App Developer from India. <br />
            I am still in university (studying something completely unrelated :/)
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home