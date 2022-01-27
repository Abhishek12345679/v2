import { NowPlayingProps } from "./Introduction";

const NowPlayingBubble = (props: NowPlayingProps) => {
    return (
        <div className="now-playing-bubble">
            <p className="white-font">
                Listening to <br />
                {props.nowPlaying.title?.length! > 40 ?
                    props.nowPlaying.title?.substring(0, 20) :
                    props.nowPlaying.title}...
                <br />
                by {props.nowPlaying.artist?.length! > 40 ?
                    props.nowPlaying.artist?.substring(0, 20) :
                    props.nowPlaying.artist}...
                🎵
            </p>
        </div>
    );
};

export default NowPlayingBubble;