import Link from "next/link"
import { currentLocation } from "../helper/helperFunctions"

interface NavbarProps {
    dayTimeString: string;
    currentLocation: string;
}

const Navbar = (props: NavbarProps) => {

    return (
        <div className="topbar">
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
                                <a title="Home">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a title="Projects">
                                    Blog
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resume.pdf">
                                <a title="Resumé" target='_blank'>
                                    Resumé
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

        </div >
    )
}

export default Navbar
