import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js';
import { errorHandler, notFound } from "./middlewears/middleware.js";
dotenv.config();
connectDB();

const app = express(); // main thing
app.use(express.json());


// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on ${PORT}`));
