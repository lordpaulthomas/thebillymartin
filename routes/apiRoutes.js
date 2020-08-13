const router = require('express').Router();
const axios = require('axios');
const keys = require("./../config/keys")
if (process.env.NODE_ENV !== 'production') require('dotenv').config()


router.get('/youtube', async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UC3r6pIJaUm4NAGw5m2HKI7w&maxResults=1&order=date&type=video&key=${keys.YOUTUBE_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
