import express from 'express';

const weatherRouter = express.Router();

weatherRouter.get('/', async (req, res) => {
  const cityName = req.query.city;
  const lat = req.query.lat;
  const lon = req.query.lon;

  if (cityName) {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&limit=5&appid=88f2c30681ef3d7fd287876f375145f0`,
    );
    const apiRes = await data.json();
    return res.status(200).json({
      status: 'success',
      data: apiRes,
    });
  }

  if (lat && lon) {
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&l&appid=88f2c30681ef3d7fd287876f375145f0`,
    );
    const apiRes = await data.json();
    return res.status(200).json({
      status: 'success',
      data: apiRes,
    });
  }

  if (!cityName && !lat && !lon) {
    res.status(400).json({
      status: 'error',
      message: 'Please provide either city name or latitude and longitude',
    });
  }
});

export default weatherRouter;
