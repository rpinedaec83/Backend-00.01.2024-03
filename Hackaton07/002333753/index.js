import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Bienvenido al API Gateway!');
});

app.get('/github/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// http://localhost:3000/github/anakarina1928



async function getWeather(city) {
  const apiKey = 'c413d57a5a86b648a6c7a5d6a6b33845'; // Asegúrate de que esta es la clave correcta
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error.response.data);
  }
}

getWeather('Caracas');
