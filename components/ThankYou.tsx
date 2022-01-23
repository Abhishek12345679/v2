import Link from "next/link";

export const ThankYou = () => {
    return (
        <div className="container-body margin-vert-20 white-font justify-center text-center">
            <Link href="/thanks">
                <a className="thankyou" title="Click this link to see the Websites inspired me.">
                    Thanks to Open source Creators and websites i drew inspiration from 🤗
                </a>
            </Link>
        </div>
    );
};
