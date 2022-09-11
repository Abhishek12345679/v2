import useSwr from "swr";
import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { currentLocation, makeDayTimeString } from "../helper/helperFunctions";

import { Introduction } from "../components/Introduction";
import { Experience } from "../components/Experience";
import { ThankYou } from "../components/ThankYou";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSwr("/api/now-playing", fetcher);

  if (error) console.log(error);
  if (data) console.log(data);

  return (
    <div>
      <Head>
        <title>Abhishek Sah</title>
        <meta
          name="description"
          content="Homepage of my personal website which houses a short description and my experience."
        />
      </Head>
      <Navbar />
      <Introduction nowPlaying={data} />
      <Experience />
      <ThankYou />
    </div>
  );
};

export default Home;
