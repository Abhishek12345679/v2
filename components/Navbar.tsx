import Link from "next/link"

interface NavbarProps {
    dayTimeString: string;
    currentLocation: string;
}

const Navbar = (props: NavbarProps) => {

    return (
        <header>
            <Link href="/">
                <a>
                    {props.dayTimeString}, {props.currentLocation}
                </a>
            </Link>
            <nav>
                <Link href="/">
                    <a>
                        Home
                    </a>
                </Link>
                <Link href="/about">
                    <a>
                        About
                    </a>
                </Link>
                <Link href="/projects">
                    <a>
                        Projects
                    </a>
                </Link>
                <Link href="/">
                    <a>
                        Resume
                    </a>
                </Link>
            </nav>

        </header>
    )
}

export default Navbar
