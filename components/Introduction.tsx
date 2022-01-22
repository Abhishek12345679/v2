import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Introduction = () => {
    return (
        <section className="introduction">
            <div className="container-body flex">
                <div className="intro-text">
                    <h3 className='margin-bottom-0'>Hi! My Name is </h3>
                    <h1>Abhishek Sah</h1>
                    <h2 className='bolder subtitle'>
                        I love solving problems and abandoning them.
                    </h2>
                    <h3 className='desc regular'>
                        I am a self-taught <span className='react-native'>React Native</span> Developer solving real life problems one by one.
                        <br className='toggle-break' />
                        {/* <br className='toggle-break' /> */}
                        <span>
                            {" "}I am creating this website as a way to showcase the projects i have worked on and learn Browser Oriented Web Development.
                        </span>
                    </h3>
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
                                        size="lg"
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
                                        size="lg"
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
                                        size="lg"
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
    )
};
