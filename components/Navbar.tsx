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
      <div className="topbar">
        <a role="link" className="skip-nav-link" href="#main-content">
          skip navigation
        </a>
        <div className="container space-around">
          <h3 className="logo font-medium" title="inspired by Zhenghao">
            <Link href="/">
              <a>
                {makeDayTimeString()}, {currentLocation}
              </a>
            </Link>
          </h3>
          <nav className="hide-nav">
            <FontAwesomeIcon
              className="toggle-button"
              icon={faAlignRight}
              size="lg"
            />
            <div className="navbar-links">
              <ul>
                <li>
                  <Link href="/">
                    <a
                      className={router.pathname == "/" ? "active" : ""}
                      title="Home"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/projects">
                    <a
                      className={router.pathname == "/projects" ? "active" : ""}
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
