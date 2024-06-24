const express = require('express');
const mongoose = require('mongoose');
const noteRoutes = require('./routes/noteRoutes');
const spotifyRoutes = require('./routes/spotifyRoutes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);
app.use('/api/spotify', spotifyRoutes);

module.exports = app;
