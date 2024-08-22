const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcrypt');

// create a user using :POST "api/auth/createuser"    No login require
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 2 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //    if there are error are error returnes bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // check the user email  already exist?
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "sorry the user is already exist" });
      }
      // hash code generated
      const salt=await  bcrypt.genSalt(10);
      const  secPass=await bcrypt.hash(req.body.password,salt)
      //   create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password:secPass,
      });
      res.json({ user });     //response that enter data by user  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some error is occured");
    }
}
);
module.exports = router;

//   .then(name => res.json(name))
//   .catch(error=>res.json(error));
//   res.send(req.body)