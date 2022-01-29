import { faAlignRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { currentLocation } from "../helper/helperFunctions"

interface NavbarProps {
    dayTimeString: string;
    currentLocation: string;
}

const Navbar = (props: NavbarProps) => {
    const router = useRouter()

    useEffect(() => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        })
    }, [])

    return (
        <header>
            <div className="topbar">
                <a
                    role='link'
                    className="skip-nav-link"
                    href="#main-content"
                >
                    skip navigation
                </a>
                <div className="container space-around">
                    <h3 className="logo regular" title="inspired by Zhenghao">
                        <Link href="/">
                            <a>
                                {props.dayTimeString}, {currentLocation}
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
                                <li >
                                    <Link href="/blog">
                                        <a
                                            className={router.pathname == "/blog" ? "active" : ""}
                                            title="Blog Coming Soon!"
                                        >
                                            Blog
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/resume.pdf">
                                        <a title="Resume" target='_blank'>
                                            Resume
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </nav>


                </div>
            </div >
        </header>
    )
}

export default Navbar
