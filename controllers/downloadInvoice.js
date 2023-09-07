const puppeteer = require('puppeteer');

const downloadpage = async (req, res) => {
    const browser = await puppeteer.launch({headless: "new"});
    const page = await browser.newPage();
    const currentURL = req.body.url;
    await page.goto(currentURL, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();
    res.setHeader('Content-Disposition', 'attachment; filename=page.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.status(200).send(pdfBuffer);
    //console.log(req.body);
}

module.exports = { downloadpage };