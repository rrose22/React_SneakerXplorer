const axios = require('axios');
const cheerio = require('cheerio')

// Function to fetch and scrape data
async function scrapeWebsite(url) {

axios.get(url)
  .then(response => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Adjust the selectors based on the actual structure of the website
      $('li').each((index, element) => {
        const itemName = $(element).find('h3').text().toString()
        if (itemName) {
            console.log(`Product Name: ${itemName}`)
            const item = $(element).find('div')
            $(item).each((index, element) => {
              if ($(element).attr('class') === "relative flex mobile:flex-col w-full items-start") {
                const item2 = $(element).find('div')
                if ($(item2).attr('class') === "flex flex-col flex-none mobile:items-start items-end text-sm md:text-base mobile:mt-2") {
                  const span = $(item2).find('span')
                  console.log(`Product Price: $${span.text()}`)
                }
                // console.log($(item2).attr('class'))
              }
            })
            console.log(`\n`)
        }

      });
    } else {
      console.error(`Failed to retrieve data. Status code: ${response.status}`);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });    
}

/*
    Foot Locker: 403 error
    Puma: Viable

*/

const targetUrl = 'https://ca.puma.com/ca/en/new-arrivals/shop-all-new-arrivals'
scrapeWebsite(targetUrl);