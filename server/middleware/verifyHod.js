const jwt = require('jsonwebtoken');

const authenticateHOD = (req, res, next) => {

  //const authHeader = req.headers['authorization'];
 // const token = authHeader && authHeader.split(' ')[1]; // Get token from Authorization header
//console.log(token)
  const token = req.cookies['access-token']
  console.log('cookie' , token)
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: Missing token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

module.exports = authenticateHOD;
