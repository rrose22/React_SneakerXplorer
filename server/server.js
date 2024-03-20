const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
var mongoose = require('mongoose')
var userRoutes = require("./routes/userRoutes.js");
const threadRoutes = require('./routes/threadRoutes.js');
const app = express();
const port = 3001;
const api = express();

app.use(cors());
api.use("/user", userRoutes)
api.use("/forum", threadRoutes)
app.use("/api", api)

app.use(express.json())
app.use(express.urlencoded())


async function scrapeShoes(url) {
  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      const shoes = [];

      $('.product-card').each((index, element) => {
        const name = $(element).find('.product-card__title').text().trim();
        const price = $(element).find('.product-price').text().trim();
        const color = $(element).find('.product-card__subtitle').text().trim();
        const image = $(element).find('.product-card__hero_image').attr('src') || $(element).find('.product-card__hero_image').attr('data-src') || $(element).find('.product-card__img').attr('alt');
        const href = $(element).find('.product-card__link-overlay').attr('href');

        const shoe = { name, price, color, image, href };
        console.log(image)
        console.log(name)
        shoes.push(shoe);
      });
      return shoes;
    } else {
      throw new Error(`Failed to retrieve data. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
}

app.get('/scrape-shoes', async (req, res) => {
  try {
    const targetUrl = 'https://www.nike.com/ca/w/new-shoes-3n82yzy7ok';
    const shoeData = await scrapeShoes(targetUrl);
    res.json(shoeData);
  } catch (error) {
    console.error('Error scraping website:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.get('', async (req, res) => {
  try {
    const targetUrl = 'https://www.nike.com/ca/w/new-shoes-3n82yzy7ok';
    const shoeData = await scrapeShoes(targetUrl);
    res.json(shoeData);
  } catch (error) {
    console.error('Error scraping website:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const connectDb = async () => {
  const DB_CONNECTION_STRING = "mongodb+srv://admin:admin@cluster0.ktjqy7e.mongodb.net/Forum?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(mongoose.connection.readyState);//1 if it is connected
  } catch (e) {
    console.log(e);
  }
};
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connectDb()
});