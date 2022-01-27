import Image from "next/image";
import { NowPlayingProps } from "./Introduction";

const NowPlayingBubble = (props: NowPlayingProps) => {
    return (
        <div className="now-playing-bubble">
            {props.nowPlaying &&
                <a href={props.nowPlaying.songUrl}>
                    <Image
                        src={props.nowPlaying.albumImageUrl!}
                        width={60}
                        height={60}
                    />
                </a>
            }
            <p className="white-font padding-h-10">
                Listening to <br />
                {props.nowPlaying.title?.length! > 40 ?
                    props.nowPlaying.title?.substring(0, 20) :
                    props.nowPlaying.title}
                {props.nowPlaying.title?.length! > 40 ? "..." : ""}
                <br />
                by {props.nowPlaying.artist?.length! > 40 ?
                    props.nowPlaying.artist?.substring(0, 20) :
                    props.nowPlaying.artist}
                {props.nowPlaying.title?.length! > 40 ? "..." : ""}
            </p>

        </div>
    );
};

export default NowPlayingBubble;