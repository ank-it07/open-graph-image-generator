const template = require('./template');
const puppeteer = require('puppeteer');
const url = require('url');

exports.generateImage = async function (req, res) {
  try {
    const queryObject = url.parse(req.query.url, true).query;
    const { title, content, imageUrl } = queryObject;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({ width: 1200, height: 630 });

    const htmlContent = template.getHtml(decodeURIComponent(title), decodeURIComponent(content), decodeURIComponent(imageUrl));
    await page.setContent(htmlContent);

    const image = await page.screenshot({ type: 'jpeg' });

    await browser.close();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/jpeg');
    res.setHeader('Cache-Control', 'public, immutable, no-transform, s-maxage=31536000, max-age=31536000');
    res.end(image);
  } catch (error) {
    console.error('Error generating image:', error);
    res.statusCode = 500;
    res.json({ error: 'Failed to generate image' });
  }
};
