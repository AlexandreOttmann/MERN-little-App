import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
import { router } from './router/posts/router.js';
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.set('strictQuery', false);
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB)
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err)
  }
}
connect();

app.use(router)


app.use(express.static("../frontend/dist"))

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, './frontend/dist/index.html'),
    (err) => { if (err) { res.status(500).send(err) } })
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
