import express from 'express'
const port = 3000

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/send', (req, res) => {
	const data = req.body
	console.log(data)
	res.status(201).send(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})