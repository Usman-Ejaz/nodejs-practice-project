const express = require('express');

const app = express();

const bodyParser = require('body-parser');
// const cors = require('cors');

// Configuring body parser middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const handlebars = require('express-handlebars');

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/../app/views`);

app.engine('hbs', handlebars.engine({
    layoutsDir: `${__dirname}/../app/views/layouts`,
    extname: 'hbs',
    defaultLayout: '',
    partialsDir: `${__dirname}/../app/views/partials/`
}));

app.use(express.static('app/assets'));

module.exports = {
    app
};