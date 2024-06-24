const spotifyService = require('../services/spotifyService');

const callback = async (req, res) => {
  const code = req.query.code || null;
  if (!code) {
    return res.status(400).json({ error: 'No code provided' });
  }

  console.log('Received authorization code:', code);

  try {
    const tokenData = await spotifyService.getToken(code);
    req.session.accessToken = tokenData.access_token;
    req.session.refreshToken = tokenData.refresh_token;
    res.redirect('/dashboard'); // Adjust the redirect as needed
  } catch (error) {
    console.error('Error exchanging code for token:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
};

const searchSongs = async (req, res) => {
  const accessToken = req.session.accessToken;
  const query = req.query.q;

  if (!accessToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const songs = await spotifyService.searchSongs(query, accessToken);
    res.json(songs);
  } catch (error) {
    console.error('Error searching songs:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { callback, searchSongs };
