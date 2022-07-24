var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products=[
    {
      Name:'IPHONE 13 PRO',
      category:'Mobile',
      description:'This is good phone',
      image:'https://m.media-amazon.com/images/I/61jLiCovxVL._SX466_.jpg'
    },
    {
      Name:'OnePlus 10R',
      category:'Mobile',
      description:'This is good phone',
      image:'https://images-eu.ssl-images-amazon.com/images/I/41pQ4gJMwEL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      Name:'IQOO 7',
      category:'Mobile',
      description:'This is good phone',
      image:'https://m.media-amazon.com/images/I/51OvvRTnJTS._SL1200_.jpg'
    },
    {
      Name:'Oppo A54',
      category:'Mobile',
      description:'This is good phone',
      image:'https://cdn.shopify.com/s/files/1/0614/8096/0176/products/Oppo-A54-_Starry-Blue-128GB_-_6GB-RAM_-Best-Online-Electronics-SLP5SFmAjPFliM.webp?v=1651701066&width=600'
    }
  ]



  res.render('index', { products, admin:false });
});

module.exports = router;
