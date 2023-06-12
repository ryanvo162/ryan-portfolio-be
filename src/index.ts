import express from 'express';
// import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: [process.env.FRONT_END_URL || '', 'http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    credentials: true,
    allowedHeaders: [
      'Content-Type',
      'X-Requested-With',
      'X-HTTP-Method-Override',
      'Accept',
      'Authorization',
    ],
  })
);
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio API' });
});

// mongoose.connect(process.env.MONGODB_URI || "", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// mongoose.connection.on("connected", () => {
//   console.log("Connected to database");
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
