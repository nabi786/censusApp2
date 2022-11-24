const jwt = require('jsonwebtoken');





const auth = (req, res, next)=>{


    const authToken =  req.headers.token;


    if(!authToken){
       return res.status(403).json({msg:"authToken required"})
    }   
    
    try {

      var decode = jwt.verify(authToken,process.env.SECRET_KEY)

      if(decode){

        req.userID = decode;
        next()
        
      }else{

        return res.status(401).json({msg : "Invalid authToken"});
      }
        
        
      } catch (err) {
        return res.status(401).json({msg : "Invalid authToken"});
      }

} 



module.exports = auth