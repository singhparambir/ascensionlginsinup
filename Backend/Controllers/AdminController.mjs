// import User from '../Model/UserModal.mjs';
// import { createSecretToken } from '../Util/SecretToken.mjs';

// import bcrypt from 'bcrypt';

// export const createUser = async (req, res) => {
//     try {
//         const { firstname, lastname, email, password, role } = req.body;

//         // Validate input data
//         if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

//         // Hash password
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create new user
//         const newUser = new User({ firstname, lastname, email, password: hashedPassword, role });
//         await newUser.save();

//         // Generate token (optional)
//         // const token = createSecretToken(newUser._id);

//         res.status(201).json({ message: "User created successfully", token });
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };
// export const getAllUsers = async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };
// export const getUserById = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const user = await User.findById(id);
//         if (!user) return res.status(404).json({ message: "User not found" });

//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };

// export const updateUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const updates = req.body;
//         const updatedUser = await User.findByIdAndUpdate(id, updates, { new: true });
//         if (!updatedUser) return res.status(404).json({ message: "User not found" });

//         res.json(updatedUser);
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };

// export const deleteUser = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await User.findByIdAndDelete(id);
//         if (!result) return res.status(404).json({ message: "User not found" });

//         res.json({ message: "User deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Server error" });
//     }
// };