var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('127.0.0.1/shop');

var Product = require('./model/product');
var Wishlist = require('./model/wishlist');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/product', function(request, response) {
    var product = new Product(request.body);
    product.save(function(error, product) {
        if (error) {
            response.status(500).send({error: "Could not create product"});
        } else {
            response.status(200).send(product);
        }
    });
});

app.get('/product', function(request, response) {
    Product.find({}, function(error, products) {
        if (error) {
            response.status(500).send({error: "Getting products failed"});
        } else {
            response.send(products);
        }
    })
});

app.post('/wishlist', function(request, response) {
    var wishlist = new Wishlist(request.body);
    wishlist.save(function(error, wishlist) {
        if (error) {
            response.status(500).send({error: "Could not create wishlist"});
        } else {
            response.status(200).send(wishlist);
        }
    });
});

app.put('/wishlist/add', function(request, response) {
    Product.findOne({_id: request.body.productId}, function(error, product) {
        if (error) {
            response.status(500).send({error: 'Could not find product'});
        } else {
            Wishlist.update({_id: request.body.wishlistId}, {$addToSet:{products:product._id}}, function(error, wishlist) {
                if (error) {
                    response.status(500).send({error: "Could not add to wishlist"});
                } else {
                    response.status(200).send(wishlist);
                }
            })
        }
    })
});

app.get('/wishlist', function(request, response) {
    Wishlist.find({}).populate({path: 'products', model: 'Product'}).exec(function(error, wishlists) {
        if (error) {
            response.status(500).send({error: "Getting wishlists failed"});
        } else {
            response.status(200).send(wishlists);
        }
    });
});


app.listen(3000, function() {
    console.log('Running on port 3000');
});