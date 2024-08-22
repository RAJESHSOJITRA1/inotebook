 const  jwt = require('jsonwebtoken');
const JWT_SECRET = "rajesh sojitra 1";


    const fetchuser=(req,res,next)=>{
        // get user from jwt token and add id to req object
        const token=req.header('auth-token') ;
        if(!token){
            res.status(401).send({error:"please authentic using a valid token"});
        }
        try {
            // verify the token  and secret and send the data to the user
            const data= jwt.verify(token,JWT_SECRET);
            req.user=data.user;
            next();
            
        } catch (error) {
            res.status(401).send({error:" the token or secret key not matched "});
        }
    }   

 module.exports=fetchuser;