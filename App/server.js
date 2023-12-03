const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = 3000;

const adminRoute = require("./routes/admin.route.js");
const userRoute = require("./routes/user.route.js");

// Use morgan middleware as a logger
// "dev": <method> <path> <status_code> <time_response>
app.use(morgan("dev"));

//use body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up view engine to render template. My templates have been stored at ./views (*.ejs)
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up place for 'serving static files'. https://expressjs.com/en/starter/static-files.html
app.use(express.static("static/"));

app.use("/user", userRoute);
app.use("/admin", adminRoute);

app.listen(PORT, () => {
  console.log(`App start to listen at http://localhost:${PORT}`);
});
