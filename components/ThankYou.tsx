import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const ThankYou = () => {
    return (
        <div className="margin-vert-20 white-font justify-center align-center text-center">
            <FontAwesomeIcon
                icon={faExternalLink}
                size="sm"
            />
            <Link href="/inspiration">
                <a className="thankyou" title="Click this link to see the Websites inspired me.">
                    Thanks to Open source Creators and websites i drew inspiration from 🤗
                </a>
            </Link>
        </div>
    );
};
