import { NextApiRequest, NextApiResponse } from "next";
import { getNowPlaying } from "../../helper/spotify";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  const response = await getNowPlaying();
  const resData = await response.json();

  if (response.status === 500) {
    return res.json({
      isPlaying: false,
      title: "",
      artist: "",
      spotify_url: "",
    });
  } else {
    return res.json({
      isPlaying: true,
      title: resData.item.name,
      artist: resData.item.artists[0].name,
      spotify_url: resData.item.external_urls.spotify,
    });
  }

  //   return res.status(200).json({ resData: resData });
};
