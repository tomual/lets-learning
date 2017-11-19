var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var ingredients = [
    {
        "id": "1234",
        "label": "egg"
    },
    {
        "id": "4567",
        "label": "avocado"
    },
    {
        "id": "6789",
        "label": "bread"
    },
];

app.get('/ingredients', function(request, response) {
    response.send(ingredients);
});

app.post('/ingredients', function(request, response) {
    var ingredient = request.body;
    if (!ingredient || ingredient.label == '') {
        response.status(500).send({error: 'Label required'});
    } else {
        ingredients.push(ingredient);
        response.status(200).send(ingredients);
    }
});

app.put('/ingredients/:id', function(request, response) {
    var id = request.params.id;
    var label = request.body.label;

    if (!label || label == '') {
        response.status(500).send({error: 'Label required'});
    } else {
        for (var i = ingredients.length - 1; i >= 0; i--) {
            var ingredient = ingredients[i];

            if (ingredient.id === id) {
                ingredients[i].label = label;
                break;
            }
        }

        response.send(ingredients);
    }

})


app.listen(3000, function() {
    console.log('Running on port 3000');
});