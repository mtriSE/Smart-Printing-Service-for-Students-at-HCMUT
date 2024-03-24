const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const app = express();
const bodyParser = require('body-parser')
const adminRoute = require("./routes/adminRoute.js");
const userRoute = require("./routes/userRoute.js");
const signin = require("./routes/authAPI/login.js");
const cookieParser = require('cookie-parser');
const PORT = 3000;
app.use(cors({
  origin: ["http://localhost:5173"],
  method: ['POST','GET','PUT'],
  credentials: true,
}))
// Get database sequelize
const db = require("./models/index.js");
const { verifyUser, verifyAdmin } = require("./controllers/auth.controller.js");

// Use morgan middleware as a logger
app.use(morgan("dev")); // "dev": <method> <path> <status_code> <time_response>

// Enable CORS
var corsOptions = {
  origin: "http://localhost:5173",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//
app.use(bodyParser.json());
app.use(cookieParser());
// parse body req as json
app.use(express.json());
// parse body req as form-data
app.use(multer().array());

app.get("/", (req, res) => {
  res.send({
    hello: "Hi",
  });
});



app.use("/auth", signin);
app.use("/user",verifyUser, userRoute);
app.use("/admin",verifyAdmin, adminRoute);

app.listen(PORT, () => {
  console.log(`App start to listen at http://localhost:${PORT}`);
});
