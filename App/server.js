const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = 3000

// Use morgan middleware as a logger
// "dev": <method> <path> <status_code> <time_response>
app.use(morgan("dev"));

// Set up view engine to render template. My templates have been stored at ./views (*.ejs)
app.set("views", path.join(__dirname,'views'));
app.set("view engine","ejs");

// set up place for 'serving static files'. https://expressjs.com/en/starter/static-files.html
app.use(express.static('static/'));

app.get('/',(req,res) => {
    res.render('home',{
        user:'maiqtri'
    })
})

app.listen(PORT, () => {
    console.log(`App start to listen at localhost:${PORT}`);
})