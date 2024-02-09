const axios = require('axios');
const cheerio = require('cheerio');

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
        const image = $(element).find('.product-card__img').attr('src');
        const href = $(element).find('.product-card__link-overlay').attr('href');

        const shoe = { name, price, color, image, href };
        shoes.push(shoe);
      });

      console.log('Scraped Shoes:', shoes); 
      return shoes;
    } else {
      throw new Error(`Failed to retrieve data. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error('Error fetching data:', error);
  }
}

const targetUrl = 'https://www.nike.com/ca/w/new-shoes-3n82yzy7ok';
scrapeShoes(targetUrl)
  .then(shoeData => {
    
  })
  .catch(error => {
    console.error('Error scraping website:', error);
  });
