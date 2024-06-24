const axios = require('axios');
const querystring = require('querystring');

const getAuthURL = (req, res) => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-library-read',
    'user-library-modify',
    'user-read-currently-playing',
    'playlist-read-private',
    'playlist-modify-private',
  ].join(' ');

  const authURL = `https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: 'code',
    client_id: process.env.SPOTIFY_CLIENT_ID,
    scope: scopes,
    redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
  })}`;

  res.redirect(authURL);
};

const getToken = async (code) => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    querystring.stringify({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
    }),
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  );
  return response.data;
};

module.exports = { getAuthURL, getToken };
