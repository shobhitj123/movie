const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Endpoint to get movie data
app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get('https://dummyapi.online/api/movies');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movies', error });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
