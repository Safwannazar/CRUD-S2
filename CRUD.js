const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.post('/login', (req, res) => {
  console.log(req.body)
  res.send('login')
})

app.get('/', (req, res) => {
  res.send('A B C D F G H I J K L M N O P Q R S T U V W X Y Z')
})

app.get('/bye', (req, res) => {
    res.send('BYE UTEM')
  })

app.post('/register', (req, res) => {
    res.send('Account created')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})