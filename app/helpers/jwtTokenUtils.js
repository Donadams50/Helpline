const  jwt =require('jsonwebtoken');
// const dotenv=require('dotenv');

// dotenv.config();


exports.signToken= (Id, userName,  firstName, lastName, Email)=> {
    const key = process.env.SECRET_KEY;
    const token = jwt.sign({ id: Id, username : userName, firstname: firstName, lastname: lastName, email: Email  }, key, { expiresIn: '1h' });
    return token;
  }

  exports.verifyToken= (req, res, next)=> { 
    const key = 'yoursecret';
    const token = req.headers.authorization || req.params.token;
    if (!token) {
      res.status(403).json({ status: 403, error: 'No token provided' }); 
    }else{
      jwt.verify(token, key, (error, decoded) => {
        if (error) {
          console.log(error)
          res.status(401).json({ status: 401, error: 'Unauthorized' });
        }else{
        //  console.log(decoded)
           req.user = decoded;
          next();
        }
       
      });
    }
    
  }
  exports.isAdmin= (req, res, next)=> { 
    const token = req.headers.authorization || req.params.token;
  
        if (req.user.isAdmin === true) {
         console.log(req.user.isAdmin) 
          next();
          
        }else{
          console.log(req.user.isAdmin) 
          res.status(401).json({ status: 401, error: 'Unauthorized to access this resource' });
          
        }
    
  }

  