import Image from "next/image";
import { NowPlayingProps } from "./Introduction";
import { usePalette } from "react-palette";

const NowPlayingBubble = (props: NowPlayingProps) => {
  const { data, loading } = usePalette(
    props.nowPlaying ? props.nowPlaying.albumImageUrl! : ""
  );
  return (
    <a
      target="_blank"
      className="flex items-center justify-center "
      href={props.nowPlaying.songUrl}
    >
      <div
        style={{
          background: !loading && data ? data.darkMuted : "#121212",
        }}
        className="now-playing-bubble"
      >
        {props.nowPlaying.albumImageUrl && (
          <div className="overflow-hidden rounded-sm">
            <Image
              src={props.nowPlaying.albumImageUrl}
              width={40}
              height={40}
              layout="fixed"
            />
          </div>
        )}
        {props.nowPlaying.isPlaying ? (
          <div>
            <p className="py-3 font-bold text-white">
              {props.nowPlaying.title?.length! > 40
                ? props.nowPlaying.title?.substring(0, 20)
                : props.nowPlaying.title}
              {props.nowPlaying.title?.length! > 40 ? "..." : ""}
              <br />
              by{" "}
              {props.nowPlaying.artist?.length! > 40
                ? props.nowPlaying.artist?.substring(0, 20)
                : props.nowPlaying.artist}
              {props.nowPlaying.title?.length! > 40 ? "..." : ""}
            </p>
          </div>
        ) : (
          <p className="py-3 text-sm text-white">Not Playing 😦</p>
        )}
      </div>
    </a>
  );
};

export default NowPlayingBubble;
