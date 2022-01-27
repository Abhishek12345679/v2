import { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../helper/spotify";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const resData = await response.json();

  if (resData.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = resData.is_playing;
  const title = resData.item.name;
  const artist = resData.item.artists
    .map((artist: any) => artist.name)
    .join(", ");
  const album = resData.item.album.name;
  const albumImageUrl = resData.item.album.images[0].url;
  const songUrl = resData.item.external_urls.spotify;

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });

  //   return res.status(200).json({ resData: resData });
};
