const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const app = express();
const PORT = 5000;


// Use morgan middleware as a logger
app.use(morgan("dev")); // "dev": <method> <path> <status_code> <time_response>


// Set up view engine to render template. My templates have been stored at ./views (*.ejs)
app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");

// Setup Session middleware
app.use(
    sessions({
        secret: 'key',
        cookie: {
            maxAge: 1000 * 60 * 60 * 5, // 5 hours to miliseconds
        },
        resave: true,
        saveUninitialized: false,
    })
);


// set up place for 'serving static files'. https://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/static'));
// app.use(express.static(path.join(__dirname, 'static')));


// using the body-parser package as middleware, which can handle many forms of data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     if (!req.session.userid) {
//         res.redirect('/auth');
//     } else {
//         next();
//     }
// });

app.get('/', (req, res) => {
    if (!req.session.userid) {
        res.redirect('/auth');
    } else {
        console.log(req.session.role);
        if (req.session.role == 0) {
            res.redirect('/spso');
        } else {
            res.redirect('/student');
        }
    }
})

// Setup route for login
const authRoute = require('./routes/auth');
app.use('/auth', authRoute);

// Setup route for student
const studentRoute = require('./routes/student');
app.use('/student', studentRoute);

// Setup route for spso
const spsoRoute = require('./routes/spso');
app.use('/spso', spsoRoute);




app.listen(PORT, () => {
    console.log(`App start to listen at localhost:${PORT}`);
})