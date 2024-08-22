const express=require('express');
const router=express.Router();
const User=require("../models/User");
const { body, validationResult } = require('express-validator');

// create a user using :POST "api/auth/"    doesn't require auth
router.post('/',[
    body('name').isLength({min:2}),
    body('email').isEmail(),
    body('password').isLength({min:5}),
],
    (req,res)=>{
    // const user=User(req.body)
    // console.log(req.body);
    // user.save()
    // res.send(req.body)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(name => res.json(name))
      .catch(error=>res.json(error));
    //   res.send(req.body)

})
module.exports=router;