const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = process.env.port || 8080;

const app = express();
const exphbs = require('express-handlebars');

const routes = require('./controllers/burgers_controller');

// app.use(express.static("public"));
app.use('/static', express.static(path.join(__dirname, 'public')))
// prepend /static to all folder path call with default of public folder

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(routes); // link routes in burger_controller with express package.

app.engine("handlebars", exphbs({ defaultLayout: "main"})); // set the main html page load out.
app.set("view engine", "handlebars"); // set the engine run root dir.

app.listen(PORT, ()=>{
    console.log(`Server Listening on port ${PORT}`)
})