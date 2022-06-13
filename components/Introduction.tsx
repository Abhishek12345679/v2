import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import NowPlayingBubble from "./NowPlayingBubble";

export interface NowPlayingProps {
  nowPlaying: {
    album?: string;
    albumImageUrl?: string;
    artist?: string;
    isPlaying: boolean;
    songUrl?: string;
    title?: string;
  };
}

export const Introduction = (props: NowPlayingProps) => {
  return (
    <section className="introduction" id="main-content">
      <div className="container-body">
        <div className={`intro-text`}>
          <div className="flex flex-start">
            <div className="title-subtitle-grp">
              <h3 className="margin-bottom-0">Hi! My Name is </h3>
              <h1 className="name">Abhishek Sah</h1>
              <Link href="/projects">
                <a className="subtitle bolder">
                  <h2>I love solving problems and abandoning them lol 😫</h2>
                </a>
              </Link>
            </div>
            {props.nowPlaying && (
              <div className="avatar-listening">
                {props.nowPlaying && props.nowPlaying.isPlaying && (
                  <NowPlayingBubble nowPlaying={props.nowPlaying} />
                )}
                <div className="avatar">
                  <Image
                    src={
                      props.nowPlaying.isPlaying
                        ? "/images/avatars/old/avatar_listening_music.webp"
                        : "/images/avatars/new/avatar_hi.png"
                    }
                    height={props.nowPlaying.isPlaying ? 125 : 300}
                    width={props.nowPlaying.isPlaying ? 125 : 300}
                    className="rounded-shape margin-left-10 margin-top20"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
          <h3 className="desc regular">
            I Am A Self Taught Developer Solving Real World Problems One By One.
            (currently overwhelmed because i have a life now)
            <br className="toggle-break" />
            <br className="desktop-break" />
            <br className="desktop-break" />
            <span>
              I Am Building This Website As A Way To Showcase The Projects I
              Have Worked On As Well As Learn Browser Oriented Web Development.
            </span>
          </h3>
          <section>
            <ul className="socials-row flex">
              <li>
                <a
                  className="social-icon"
                  title="Follow me on Github!"
                  target="_blank"
                  referrerPolicy="origin"
                  href="https://github.com/Abhishek12345679"
                >
                  <FontAwesomeIcon
                    className="mobile-social-icon"
                    icon={faGithub}
                    size="lg"
                  />
                </a>
              </li>
              <li>
                <a
                  className="social-icon"
                  title="Sike No Photos!"
                  target="_blank"
                  referrerPolicy="origin"
                  href="https://instagram.com/alooofries"
                >
                  <FontAwesomeIcon
                    className="mobile-social-icon"
                    icon={faInstagram}
                    size="lg"
                  />
                </a>
              </li>
              <a className="btn-outline" href="mailto:sah755146@gmail.com">
                Email me
              </a>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};
