const api_key = process.env.LASTFM_API_KEY;
const username = process.env.LASTFM_USERNAME || "sonoverthinks";

const LASTFM_ENDPOINT = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${username}&api_key=${api_key}&format=json&limit=1`;

export interface LastFMTrack {
  name: string;
  artist: {
    "#text": string;
  };
  album: {
    "#text": string;
  };
  image: {
    size: string;
    "#text": string;
  }[];
  url: string;
  "@attr"?: {
    nowplaying: string;
  };
}

export const getLastPlayed = async () => {
  try {
    if (!api_key) {
      console.error("Last.fm API key is missing in environment variables.");
      return false;
    }

    const response = await fetch(LASTFM_ENDPOINT, {
      cache: "no-store",
    });

    if (response.status > 400) {
      console.error(`Last.fm API returned error status: ${response.status}`);
      return false;
    }

    const data = await response.json();
    const trackList = data?.recenttracks?.track;
    if (!trackList || trackList.length === 0) {
      return false;
    }

    // Sometimes track can be a single object instead of an array when limit=1
    const track: LastFMTrack = Array.isArray(trackList) ? trackList[0] : trackList;

    const isPlaying = track["@attr"]?.nowplaying === "true";
    const images = track.image || [];
    let albumArt = images[3]?.["#text"] || images[2]?.["#text"] || images[1]?.["#text"] || "";
    if (!albumArt) {
      albumArt = "https://i.scdn.co/image/ab67616d0000b2730656d53823469a4734891b0c"; // Default fallback
    }

    return {
      isPlaying,
      title: track.name,
      artist: track.artist["#text"],
      albumArt,
      songUrl: track.url,
    };
  } catch (e) {
    console.error("Error in Last.fm getLastPlayed:", e);
    return false;
  }
};
