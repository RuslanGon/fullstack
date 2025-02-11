import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors'
import authRouter from './routes/auth.js'

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

// Middleware
app.use(cors())
app.use(express.json())

// Routes

app.use('/api/auth', authRouter)

// app.get('/', (req, res) => {
// return res.json({message:'All is fine Ruslan'})
// })

async function startServer() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.9yeu1fb.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );
    app.listen(PORT, () => {
      console.log(`Server start port on ${PORT}`);
    });
  } catch (error) {
    console.log("error");
  }
}
startServer();
