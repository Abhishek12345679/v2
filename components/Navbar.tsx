import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { currentLocation, makeDayTimeString } from "../helper/helperFunctions";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    // for turning the desktop horizontal nav into mobile style web nav
    const toggleButton = document.getElementsByClassName("toggle-button")[0];
    const navbarLinks = document.getElementsByClassName("navbar-links")[0];

    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  }, []);

  return (
    <header>
      <div className="fixed z-40 flex w-full bg-primary-main py-2 px-0 text-white">
        <a
          role="link"
          className="absolute left-2 m-2 -translate-y-[-160%] rounded bg-gray-800 p-2 font-medium text-white"
          href="#main-content"
        >
          skip navigation
        </a>
        <div className="flex items-center justify-around">
          <h3 className="font-medium" title="inspired by Zhenghao">
            <Link href="/">
              <a>
                {makeDayTimeString()}, {currentLocation}
              </a>
            </Link>
          </h3>
          <nav>
            <FontAwesomeIcon
              className="toggle-button"
              icon={faAlignRight}
              size="lg"
            />
            <div className="navbar-links">
              <ul className="flex">
                <li>
                  <Link href="/">
                    <a
                      className={`${
                        router.pathname == "/" && "active"
                      }font-medium m-2 rounded p-2 text-gray-100`}
                      title="Home"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a
                      className={`${
                        router.pathname == "/" && "active"
                      }font-medium m-2 rounded p-2 text-gray-100`}
                      title="Projects"
                    >
                      Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/resume_traditional_personal.pdf">
                    <a title="Resume" target="_blank">
                      Resume
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
