const express = require('express');
const path = require('path');
const router = express.Router();

router.get('^/$|index(.html)?', (req, res) => {
    res.render(path.join(__dirname, '..', 'views', 'index.ejs'),{idArr : false,filename:'No File Chosen'});
});

module.exports = router;