import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <li>
                        <Link href='/'>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/about'>
                            <a>
                                About
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <a>
                                Resume
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
