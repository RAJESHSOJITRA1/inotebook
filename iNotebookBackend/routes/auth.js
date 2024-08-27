const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');    //json web token
const JWT_SECRET = "rajesh sojitra 1";
const fetchuser = require('../middleware/fetchuser')


//ROUTE:1 create a user using :POST "api/auth/createuser"    No login require
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 5 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //    if there are error are error returnes bad request
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success,errors: errors.array() });
    }

    try {
      // check the user email  already exist?
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {

        return res.status(400).json({ success,error: "sorry the user is already exist" });
      }
      // hash code generated
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      //   create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user: {
          id: user.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET)
      //res.json
      success=true;
      res.json({ success,authtoken ,user}); //response that enter data by user

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error occured");
    }
  }
);
//ROUTE:2 create a User using :POST "api/auth/login"    No login require
router.post("/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password is not matching").exists(),
  ],
  async (req, res) => {
    let success = false;
    //    if there are error are error returnes bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //using destructuring method of js
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email }); //find user in database
      if (!user) {
        return res.status(400).json({ error: "please re enter the email" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({ success, error: "please re enter the password correctly" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      // if email and password matched succes true
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error occured");
    }

  }
);

//ROUTE:2 Get Login User Deatails using :POST "api/auth/getuser"     login required
router.post("/getuser", fetchuser, async (req, res) => {

  try {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error")
  }
}
)

module.exports = router; 