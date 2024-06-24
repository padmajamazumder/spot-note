const express = require('express');
const router = express.Router();
const { callback, searchSongs } = require('../controllers/spotifyController');
const { getAuthURL } = require('../services/spotifyService');

router.get('/login', getAuthURL);
router.get('/callback', callback);
router.get('/search', searchSongs); 

module.exports = router;
