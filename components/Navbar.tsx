import { Temporal } from "@js-temporal/polyfill"
import { NextPage } from "next"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar: NextPage = () => {

    const currentLocation = "Kolkata"

    const makeDayTimeString = () => {
        const DaysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
        const currentDay = DaysOfTheWeek[Temporal.Now.plainDateISO().dayOfWeek]

        const hours = Temporal.Now.plainDateTimeISO().hour < 10 ? "0".concat(Temporal.Now.plainDateTimeISO().hour.toString()) : Temporal.Now.plainDateTimeISO().hour.toString()
        const minutes = Temporal.Now.plainDateTimeISO().minute < 10 ? "0".concat(Temporal.Now.plainDateTimeISO().minute.toString()) : Temporal.Now.plainDateTimeISO().minute.toString()

        return `${currentDay} ${hours}:${minutes}`
    }

    useEffect(() => {
        makeDayTimeString()
    }, [])

    return (
        <header>
            <Link href="/">
                <a>
                    {makeDayTimeString()}, {currentLocation}
                </a>
            </Link>
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
