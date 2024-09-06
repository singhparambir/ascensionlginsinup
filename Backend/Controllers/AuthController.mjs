// import { createSecretToken } from '../Util/SecretToken.mjs';
// // const User = require("../Models/UserModel");
// import User from '../Model/UserModal.mjs'
// import bcrypt from "bcrypt";
// import crypto from 'crypto';



// import jwt from 'jsonwebtoken';
// export const signup = async (req, res) => {
//     try {
//         const { firstname, lastname, email, password, role, username } = req.body;

//         // Validate input data
//         if (!email || !password || !username) {
//             return res.status(400).json({ message: "Email, password, and username are required" });
//         }

//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         // Create new user
//         const newUser = new User({ firstname, lastname, email, password, role, username });
//         await newUser.save();

//         // Generate token
//         const token = createSecretToken(newUser._id);
//         console.log(token);

//         // Set token in cookie
//         res.cookie("token", token, {
//             withCredentials: true,
//             httpOnly: false,
//         });

//         res.status(201).json({ message: "User created successfully", token });
//     } catch (error) {
//         console.error("Error in signup:", error);
//         res.status(500).json({ message: "Server error" });
//     }
// };


// const lockoutPeriod = 2 * 60 * 1000; // 2 minutes in milliseconds


// export const signin = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ message: 'All fields are required' });
//         }

//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(400).json({ message: 'Incorrect email or password' });
//         }

//         const auth = await bcrypt.compare(password, user.password);
//         const currentTime = new Date();

//         if (!auth) {
//             // If password is incorrect, increment failed attempts
//             user.failedAttempts.count += 1;
//             user.failedAttempts.lastAttempt = currentTime;
//             await user.save();

//             if (user.failedAttempts.count >= 3) {
//                 return res.status(403).json({ message: 'Account locked. Try again in 2 minutes.' });
//             }

//             return res.status(400).json({ message: 'Incorrect email or password' });
//         }

//         // If password is correct, reset failed attempts and lockout status
//         user.failedAttempts.count = 0;
//         user.failedAttempts.lastAttempt = currentTime;
//         await user.save();

//         const token = createSecretToken(user._id);
//         res.cookie("token", token, { withCredentials: true, httpOnly: false });
//         return res.status(200).json({ message: "User logged in successfully", success: true });

//     } catch (error) {
//         console.error("Error during login:", error);
//         return res.status(500).json({ message: 'Server error. Please try again later.' });
//     }
// };
// // export const signin = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;

// //         // Validate input data
// //         if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

// //         // Check if user exists
// //         const user = await User.findOne({ email });
// //         if (!user) return res.status(401).json({ message: "Invalid credentials" });

// //         // Compare passwords
// //         const isMatch = await bcrypt.compare(password, user.password);
// //         if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

// //         // Generate JWT token
// //         const token = createSecretToken(user._id);

// //         res.json({ token });
// //     } catch (error) {
// //         res.status(500).json({ message: "Server error" });
// //     }
// // };

// export const signout = (req, res) => {
//     try {
//         // Client should delete the token on signout
//         res.json({ message: "Signout successful" });
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };







































// // export const Signup = async (req, res, next) => {
// //     try {
// //         const { email, password, username } = req.body;

// //         const existingUser = await User.findOne({ email });
// //         if (existingUser) {
// //             return res.status(400).json({ message: "User already exists" });
// //         }

// //         const user = await User.create({ email, password, username });
// //         const token = createSecretToken(user._id);

// //         res.cookie("token", token, {
// //             httpOnly: true,
// //             secure: process.env.NODE_ENV === 'production', // Only use secure cookies in production
// //         });

// //         return res.status(201).json({ message: "User added", success: true, user });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: 'Internal server error' });
// //     }
// // };




// // const lockoutPeriod = 2 * 60 * 1000; // 2 minutes in milliseconds

// // export const Login = async (req, res) => {
// //     try {
// //         const { email, password } = req.body;
// //         if (!email || !password) {
// //             return res.status(400).json({ message: 'All fields are required' });
// //         }

// //         const user = await User.findOne({ email });
// //         if (!user) {
// //             return res.status(400).json({ message: 'Incorrect email or password' });
// //         }

// //         const auth = await bcrypt.compare(password, user.password);
// //         const currentTime = new Date();

// //         if (!auth) {
// //             // If password is incorrect, increment failed attempts
// //             user.failedAttempts.count += 1;
// //             user.failedAttempts.lastAttempt = currentTime;
// //             await user.save();

// //             if (user.failedAttempts.count >= 3) {
// //                 return res.status(403).json({ message: 'Account locked. Try again in 2 minutes.' });
// //             }

// //             return res.status(400).json({ message: 'Incorrect email or password' });
// //         }

// //         // If password is correct, reset failed attempts and lockout status
// //         user.failedAttempts.count = 0;
// //         user.failedAttempts.lastAttempt = currentTime;
// //         await user.save();

// //         const token = createSecretToken(user._id);
// //         res.cookie("token", token, { withCredentials: true, httpOnly: false });
// //         return res.status(200).json({ message: "User logged in successfully", success: true });

// //     } catch (error) {
// //         console.error("Error during login:", error);
// //         return res.status(500).json({ message: 'Server error. Please try again later.' });
// //     }
// // };