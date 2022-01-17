import { Temporal } from "@js-temporal/polyfill"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {

    const currentLocation = "Kolkata"

    const makeDayTimeString = () => {
        const DaysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
        const currentDay = DaysOfTheWeek[Temporal.Now.plainDateISO().dayOfWeek]

        return `${currentDay} ${Temporal.Now.plainDateTimeISO().hour}:${Temporal.Now.plainDateTimeISO().minute}`
    }

    useEffect(() => {
        makeDayTimeString()
    }, [])

    return (
        <header>
            {/* <h3> */}
            <Link href="/">
                <a>
                    {makeDayTimeString()}, {currentLocation}
                </a>
            </Link>
            {/* </h3> */}
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
                            <Link href='/projects'>
                                <a>
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/resume'>
                                <a>
                                    Resume
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </header>
    )
}

export default Navbar
