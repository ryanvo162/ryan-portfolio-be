import express from 'express';
// import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

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
