import Link from "next/link"
import { useRouter } from "next/router"
import { currentLocation } from "../helper/helperFunctions"

interface NavbarProps {
    dayTimeString: string;
    currentLocation: string;
    // active: boolean;
}

const Navbar = (props: NavbarProps) => {
    const router = useRouter()
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
                <div className="container grid">
                    <h3 className="logo" title="inspired by Zhenghao">
                        <Link href="/">
                            <a>
                                {props.dayTimeString}, {currentLocation}
                            </a>
                        </Link>
                    </h3>

                    <nav>
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
                    </nav>
                </div>

            </div >
        </header>
    )
}

export default Navbar
