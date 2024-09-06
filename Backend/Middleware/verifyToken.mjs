// import jwt from 'jsonwebtoken';

// // Middleware to verify JWT
// export default function verifyToken(req, res, next) {
//     const token = req.headers['authorization']?.split(' ')[1];  // Assuming Bearer token

//     if (!token) return res.status(403).send('Access denied.');

//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//         if (err) return res.status(401).send('Invalid token.');

//         req.user = decoded;  // Add user info to request
//         next();
//     });
// }
