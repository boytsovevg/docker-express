const express = require('express');
const PORT = 3001;

const app = express();

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
    title: String,
    price: Number,
    tasteLevel: Number
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = { Coffee };
mongoose.connect('mongodb://mongoadmin:32167@localhost:27017/coffeeshop', {useNewUrlParser: true});

const Arabica = new Coffee({
    title: 'Arabica',
    price: 3.99,
    tasteLevel: 8
});

Arabica.save(err => {
    if (err) console.log(error);

    console.log('Arabica saved!');
})

const findCoffeeByTitle = (title) => {
    console.log(title);

    return Coffee.findOne({'title': title})
        .then((err, coffeeResult) => {
            if (err) console.log(err);
            
            return coffeeResult;
        });
}


app.get('/', (req, res) => res.send('<h1>docker test</h1>'));
app.get('/coffee/:title', (req, res) => {
    if (req.params.title) {
        return res.send(findCoffeeByTitle(req.params.title));
    }

    return res.send('<h1>add coffee title</h1>');
});

app.listen(PORT, () => console.log('express container run on port ' + PORT));
