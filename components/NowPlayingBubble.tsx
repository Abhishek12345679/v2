import { NowPlayingProps } from "./Introduction";

const NowPlayingBubble = (props: NowPlayingProps) => {
    return (
        <div className="now-playing-bubble">
            <p className="white-font">
                Listening to <br />{props.nowPlaying.title} <br /> by {props.nowPlaying.artist}  🎵
            </p>
        </div>
    );
};

export default NowPlayingBubble;