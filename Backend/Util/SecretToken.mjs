import jwt from 'jsonwebtoken';

// export function createSecretToken(id) {
//     const secretKey = process.env.TOKEN_KEY;
//     if (!secretKey) {
//         throw new Error('JWT secret key (TOKEN_KEY) is not defined');
//     }
//     return jwt.sign({ id }, secretKey, { expiresIn: '3d' });
// }

;

export function createSecretToken(id) {
    const secretKey = process.env.JWT_SECRET;  // Updated this line
    if (!secretKey) {
        throw new Error('JWT secret key (JWT_SECRET) is not defined');  // Updated this line
    }
    return jwt.sign({ id }, secretKey, { expiresIn: '3d' });
}
