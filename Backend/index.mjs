import express from "express";
import { connect } from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";
// import authRoute from "./Route/AuthRoute.mjs";
// import Admin from "./Route/Admin.mjs";
// import Roles from "./Route/Roles.mjs"

// Load environment variables
dotenv.config();

// Destructure environment variables
const { MONGO_URL, PORT } = process.env;

// Connect to MongoDB
connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.error(err));

const app = express();

// Middleware
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
// app.use(cookieParser());
// app.use(express.json());
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');
// });
// // Routes
// app.use("/auth", authRoute);

// app.use('/admin', Admin);
// app.use('/roles', Roles);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
