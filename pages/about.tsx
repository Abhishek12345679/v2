import Link from "next/link"

const about = () => {
    return (
        <div>
            <h1>About Me</h1>
            <Link
                href="/"
            >
                <a>go back</a>
            </Link>
        </div>
    )
}

export default about
