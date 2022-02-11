import Image from "next/image";
import { NowPlayingProps } from "./Introduction";
import { usePalette } from 'react-palette';

const NowPlayingBubble = (props: NowPlayingProps) => {

    const { data, loading, error } = usePalette(props.nowPlaying ? props.nowPlaying.albumImageUrl! : "")

    const nowPlayingBubble = document.getElementsByClassName('now-playing-bubble')

    return (
        <div
            style={{
                background: !loading && data ? data.darkMuted : "#121212"
            }}
            className="now-playing-bubble"
        >
            {props.nowPlaying &&
                <a href={props.nowPlaying.songUrl}>
                    {props.nowPlaying.albumImageUrl &&
                        <div className="rounded-rect">
                            <Image
                                src={props.nowPlaying.albumImageUrl}
                                width={40}
                                height={40}
                                layout="fixed"
                            />
                        </div>
                    }
                </a>
            }
            {props.nowPlaying.isPlaying ?
                <div>
                    <p className="white-font bold padding-h-10">
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
                :
                <p className="white-font font-size-15 padding-h-10">
                    Not Playing 😦
                </p>
            }

        </div>
    );
};

export default NowPlayingBubble;