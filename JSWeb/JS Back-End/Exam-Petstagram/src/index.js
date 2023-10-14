const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const app = express();

//TODO: change DB name according to project name
mongoose.connect(`mongodb://127.0.0.1:27017/petstagram`)
    .then(() => console.log("DB connected successfully"))
    .catch(err => console.log("DB error, ", err.message));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(express.static(path.resolve(__dirname, 'static')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);

app.listen("5000", console.log("Listening on port 5000..."));