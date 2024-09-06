// import jwt from 'jsonwebtoken';

// const verifyAdmin = (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1];

//     if (!token) {
//         return res.status(401).json({ message: "No token provided" });
//     }

//     try {
//         const secretKey = process.env.JWT_SECRET;
//         if (!secretKey) {
//             throw new Error('JWT secret key (JWT_SECRET) is not defined');
//         }

//         jwt.verify(token, secretKey, async (err, decoded) => {
//             if (err) {
//                 return res.status(403).json({ message: "Invalid or expired token" });
//             }

//             req.userId = decoded.id;

//             // Fetch user from database
//             const user = await User.findById(req.userId);
//             if (!user || user.role !== 'admin') {
//                 return res.status(403).json({ message: "Access denied" });
//             }

//             next();
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };

// export default verifyAdmin;