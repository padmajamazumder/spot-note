const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session'); 
const spotifyRoutes = require('./routes/spotifyRoutes');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));
app.use('/api/spotify', spotifyRoutes);

// Add this root route to handle requests to "/"
app.get('/', (req, res) => {
  res.send('Welcome to the Spotify Clone API');
});

// Add this dashboard route
app.get('/dashboard', (req, res) => {
  if (!req.session.accessToken) {
    return res.redirect('/api/spotify/login');
  }
  res.send('Welcome to your dashboard');
});

const PORT = process.env.PORT || 8888;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
