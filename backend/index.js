import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_DB, () => {
	console.log("Connected to MongoDB");
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/send', (req, res) => {
  const data = req.body;

  res.status(201).send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
