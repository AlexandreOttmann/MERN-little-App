import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser'
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


const MemberSchema = new mongoose.Schema({
  name: String,
  role: String
});

const Member = mongoose.model("Member", MemberSchema)

// Get the data from /create route and send it to database with create
app.post("/create", (req, res) => {
  const newMember = new Member({
    name: req.body.name,
    role: req.body.role
  });
  newMember
    .save()
    .then(doc => console.log('doc', doc))
    .catch(err => console.log(err));
});

// Path to render the Members list
app.get("/", (req, res) => {
  Member.find()
    .then(items => res.json(items))
    .catch(err => console.log(err))
})
// Path to delete
app.delete("/delete/:id", (req, res) => {
  Member.findByIdAndDelete({ _id: req.params.id })
    .then(doc => console.log(doc)).catch((err) => console.log(err));
})

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
