var express = require("express");

var router = express.Router();

// main page
router.get('/', function (req, res){
    res.render('index');
});

// date as unix time
router.get(/\/(\d{1,10}$)/, function(req, res) {
   res.send({
       unix: parseInt(req.params[0]),
       natural: Date.create(parseInt(req.params[0]*1000)).short()
   });
});

// date as natural date or gibberish
router.get(/\/[\w\d, %]+/, function(req, res) {
    var naturalDate = req.url.substring(1).replace(/%20/g, ' ');

    if (Date.create(naturalDate).isValid()) {
        res.send({
            unix: Math.round(Date.create(naturalDate).getTime() / 1000),
            natural: naturalDate
        });
    } else {
        res.send({
            unix: null,
            natural: null
        });
    }
});

module.exports = router;