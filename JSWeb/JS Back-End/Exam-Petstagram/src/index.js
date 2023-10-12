const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");

const routes = require("./routes");

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen("5000", console.log("Listening on port 5000..."));