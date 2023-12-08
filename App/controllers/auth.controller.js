const config = require("../config/auth.config.js");
const Account = require("../models/account.model.js");
const bcrypt = require("bcrypt");

var jwt = require("jsonwebtoken");

const signin = (req, res, next) => {
  Account.findById(req.body.account_id, (err, data) => {
    // console.log(err);
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found account with id ${req.body.account_id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving account with id " + req.body.account_id,
        });
      }
    } else {
      if (req.body.password !== data.password) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }
      const role = data.role;
      const bknetid = data.account_id;

      // const payload = {
      //   bknetid: req.body.bknetid,
      //   role: req.body.role,
      // };

      const token = jwt.sign(
        { role: role, bknetid: bknetid },
        "jwt_secret_key",
        { expiresIn: "1d" }
      );

      res.cookie("token", token);
      console.log(token);
      res.status(200).send({
        account_id: req.body.account_id,
        role: req.body.role,
        accessToken: token,
      });
    }
  });
};

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
      if (err) return res.json({ Status: false, Error: "Wrong token" });
      // console.log(token);
      // console.log(decoded);
      // console.log(decoded.role);
      // console.log(decoded.bknetid);
      // return;
      req.bknetid = decoded.bknetid;
      req.role = decoded.role;
      if(decoded.role == 'U') next();
      else {
        return res.json({Satus:false, Error: "You not a user"})
      }
    });
  } else {
    return res.json({ Status: false, Error: "Not authenticated user" });
  }
};

const verifyAdmin = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
      if (err) return res.json({ Status: false, Error: "Wrong token" });
      // console.log(token);
      // console.log(decoded);
      // console.log(decoded.role);
      // console.log(decoded.bknetid);
      // return;
      req.bknetid = decoded.bknetid;
      req.role = decoded.role;
      if(decoded.role == 'A') next();
      else {
        return res.json({Status: false, Error: "You are not admin"})
      }
    });
  } else {
    return res.json({ Status: false, Error: "Not authenticated admin" });
  }
};

const logout = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      Status: false,
      Error: "No token provided",
    });
  }
  res.clearCookie("token");
  res.status(200).json({ Status: true, Message: "Logout successful" });
};

module.exports = { signin, verifyUser, logout, verifyAdmin };
