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
                        <div className={`segmented-control-button ${router.pathname == "/inspiration" ? "active-control" : ""}`}>
                            <Link href="/inspiration">
                                <a>Inspiration</a>
                            </Link>
                        </div>
                        <div className={`segmented-control-button ${router.pathname == "/opensource" ? "active-control" : ""}`}>
                            <Link href="/opensource">
                                <a>Open Source</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThanksSegmentedControl;