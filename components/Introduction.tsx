import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

interface IntroductionComponentProps {
    nowPlaying: {
        album?: string,
        albumImageUrl?: string,
        artist?: string,
        isPlaying: boolean,
        songUrl?: string,
        title?: string,
    }
}

export const Introduction = (props: IntroductionComponentProps) => {
    if (!props.nowPlaying) {
        return (
            <section className="introduction" id="main-content">

            </section>
        )
    }
    else {
        return (
            <section className="introduction" id="main-content">
                <div className="container-body">
                    {/* <div className={`intro-text${!props.nowPlaying.isPlaying ? " pos-relative" : ""}`}> */}
                    <div className={`intro-text`}>
                        <div className="flex flex-start">
                            <div className="title-subtitle-grp">
                                <h3 className='margin-bottom-0'>Hi! My Name is </h3>
                                <h1 className="name">Abhishek Sah</h1>
                                <h2 className='subtitle bolder'>I love solving problems and abandoning them.</h2>
                            </div>
                            {/* <div className={`avatar${!props.nowPlaying.isPlaying ? " pos-absolute flex-end" : ""}`}> */}
                            <div className={`avatar`}>
                                {props.nowPlaying &&
                                    <Image
                                        src={props.nowPlaying.isPlaying ? "/images/avatar_listening_music.gif" : "/images/avatar.jpeg"}
                                        // src={"/images/avatar.jpeg"}
                                        height={200}
                                        width={200}
                                        className="rounded-shape"
                                        priority
                                    />
                                }
                            </div>
                            {/* {props.nowPlaying.isPlaying && <div className="tones">
                                <div className="tone-width">
                                    <Image
                                        className="tone-width"
                                        src="/images/tones/1.png"
                                        height={40}
                                        width={40}
                                        priority
                                    />
                                </div>
                                <div className="tone-width">
                                    <Image
                                        src="/images/tones/2.png"
                                        height={40}
                                        width={40}
                                        priority
                                    />
                                </div>
                                <div className="tone-width">
                                    <Image
                                        className="pos-relative"
                                        src="/images/tones/3.png"
                                        height={40}
                                        width={40}
                                        priority
                                    />
                                </div>
                            </div>} */}
                        </div>
                        <h3 className='desc regular'>
                            I am a self-taught <span className='react-native'>React Native</span> Developer solving real life problems one by one.
                            <br className='toggle-break' />
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
            </section >
        )
    }
};
