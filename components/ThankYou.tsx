import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const ThankYou = () => {
    return (
        <div className="margin-vert-20 white-font justify-center align-center text-center">
            <Link href="/inspiration">
                <a className="thankyou" title="Click this link to see the Websites inspired me.">
                    <FontAwesomeIcon
                        className="margin-right-10"
                        icon={faExternalLink}
                        size="sm"
                    />
                    <p>Thanks to Open source Creators and websites i drew inspiration from 🤗</p>
                </a>
            </Link>
        </div>
    );
};
