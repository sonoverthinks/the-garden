const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  if (!client_id || !client_secret || !refresh_token) {
    console.error("Spotify credentials are missing in environment variables.");
    return { access_token: null };
  }

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    cache: 'no-store'
  });

  return response.json();
};

export const getLastPlayed = async () => {
  try {
    const { access_token } = await getAccessToken();
    if (!access_token) return false;

    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: { Authorization: `Bearer ${access_token}` },
      cache: "no-store",
    });

    if (response.status > 400) {
      return false;
    }

    const data = await response.json();
    if (!data.items || data.items.length === 0) return false;

    const song = data.items[0].track;
    return {
      isPlaying: false,
      title: song.name,
      artist: song.artists.map((_artist: any) => _artist.name).join(", "),
      albumArt: song.album.images[0].url,
      songUrl: song.external_urls.spotify,
    };
  } catch (e) {
    console.error("Error in getLastPlayed:", e);
    return false;
  }
};
