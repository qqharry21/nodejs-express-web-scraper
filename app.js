/** @format */
// https://github.com/Terieyenike/node-express-web-scraper
const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

const website = 'https://daily.dev/blog';

// try {
//   axios(website).then(res => {
//     const data = res.data;
//     const $ = cheerio.load(data);

//     let content = [];

//     $('.grid-article-content', data).each(function () {
//       const category = $(this).find('a').first().text().trim();
//       const title = $(this).find('h2').text().trim();
//       const url = $(this).find('a').next().attr('href');

//       content.push({
//         category,
//         title,
//         url,
//       });

//       app.get('/', (req, res) => {
//         res.json(content);
//       });
//     });
//   });
// } catch (error) {
//   console.log(error, error.message);
// }

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});
