import Link from "next/link";
import { useRouter } from "next/router";

const ThanksSegmentedControl = () => {
    const router = useRouter()
    return (
        <section className="introduction">
            <div
                className="container-body"
                id="main-content"
            >
                <h1 className="page-heading white-font" >
                    Thanks
                </h1>
                <div className="segmented-control">
                    <div className="flex segmented-control-container">
                        <div>
                            <Link href="/inspiration">
                                <a className={`segmented-control-button ${router.pathname == "/inspiration" ? "active-control" : ""}`}>Inspiration</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/opensource">
                                <a className={`segmented-control-button ${router.pathname == "/opensource" ? "active-control" : ""}`}>Open Source</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThanksSegmentedControl;