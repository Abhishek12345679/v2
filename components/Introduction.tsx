import {
  faGithub,
  faInstagram,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";
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
    <section
      className="relative my-5 bg-primary-main py-4 text-gray-200"
      id="main-content"
    >
      <div className="my-4 mx-auto max-w-[900px] py-0 px-6">
        <div>
          <div className="flex-start flex">
            <div className="title-subtitle-grp">
              <h3 className="margin-bottom-0">Hi! My Name is </h3>
              <h1 className="text-6xl font-bold ">Abhishek Sah</h1>
              <Link href="/projects">
                <a className="mb-6 font-extrabold text-gray-300">
                  <h2 className="text-4xl font-bold">
                    Check out the projects i have worked on 💀
                  </h2>
                </a>
              </Link>
            </div>
            {props.nowPlaying && (
              <div className="m-0 flex flex-row-reverse justify-around p-0">
                {props.nowPlaying && props.nowPlaying.isPlaying && (
                  <NowPlayingBubble nowPlaying={props.nowPlaying} />
                )}
                <div className="ml-5">
                  <Image
                    src={
                      props.nowPlaying.isPlaying
                        ? "/images/avatars/old/avatar_listening_music.webp"
                        : "/images/avatars/new/avatar_hi.png"
                    }
                    height={props.nowPlaying.isPlaying ? 125 : 300}
                    width={props.nowPlaying.isPlaying ? 125 : 300}
                    className="ml-[10px] mt-5 rounded-[9999px]"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
          <h3 className="mt-1 w-[700px] font-medium">
            I Am A Self Taught Developer Solving Real World Problems One By One.
            <br className="toggle-break" />
            <br className="desktop-break" />
            <br className="desktop-break" />
            <span>
              I Am Building This Website As A Way To Showcase The Projects I
              Have Worked On As Well As Learn Browser Oriented Web Development.
            </span>
          </h3>
          <section>
            <ul className="mt-8 flex h-16 w-full gap-8 text-xl">
              <li className="flex p-2">
                <a
                  className="flex h-8 w-8 items-center justify-center rounded"
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
                  className="flex h-8 w-8 items-center justify-center rounded"
                  title="Follow me on Gitlab (fuck msft)!"
                  target="_blank"
                  referrerPolicy="origin"
                  href="https://gitlab.com/Abhishek12345679"
                >
                  <FontAwesomeIcon
                    // media query
                    className="mobile-social-icon"
                    icon={faGitlab}
                    size="lg"
                  />
                </a>
              </li>
              <li>
                <a
                  className="flex h-8 w-8 items-center justify-center rounded"
                  title="Sike No Photos!"
                  target="_blank"
                  referrerPolicy="origin"
                  href="https://instagram.com/shhakeyy"
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
