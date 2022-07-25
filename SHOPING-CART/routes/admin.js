var express = require('express');
const { render } = require('../app');
const productHelpers = require('../helpers/product-helpers');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');
/* GET users listing. */
router.get('/', function (req, res, next) {
  let products = [
    {
      Name: 'IPHONE 13 PRO',
      category: 'Mobile',
      description: 'This is good phone',
      image: 'https://m.media-amazon.com/images/I/61jLiCovxVL._SX466_.jpg'
    },
    {
      Name: 'OnePlus 10R',
      category: 'Mobile',
      description: 'This is good phone',
      image: 'https://images-eu.ssl-images-amazon.com/images/I/41pQ4gJMwEL._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      Name: 'IQOO 7',
      category: 'Mobile',
      description: 'This is good phone',
      image: 'https://m.media-amazon.com/images/I/51OvvRTnJTS._SL1200_.jpg'
    },
    {
      Name: 'Oppo A54',
      category: 'Mobile',
      description: 'This is good phone',
      image: 'https://cdn.shopify.com/s/files/1/0614/8096/0176/products/Oppo-A54-_Starry-Blue-128GB_-_6GB-RAM_-Best-Online-Electronics-SLP5SFmAjPFliM.webp?v=1651701066&width=600'
    }
  ]
  res.render('admin/view-products', { admin: true, products })
});
router.get('/add-product', function (req, res) {
  res.render('admin/add-product');
});
router.post('/add-product', (req, res) => {
  console.log(req.body);
  console.log(req.files.Image);


  productHelpers.addProduct(req.body, (id) => {
    let image = req.files.Image
    console.log(id);
    image.mv('./public/product-images/' + id + '.jpg', (err, done) => {
      if (!err) {
        res.render('admin/add-product')
      } else {
        console.log(err);
      }
    })

  })

})

module.exports = router;
