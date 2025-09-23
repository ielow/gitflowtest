const express = require('express')
const app = express()
const PORT = 3001

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Run server Run')
})

app.listen(PORT, () => [
    console.log("application running on: http://localhost:"+PORT)
])