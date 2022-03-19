const express = require('express')
const port = process.env.PORT || 8000

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})


app.listen(port, () => {
  console.log(`Server has been started on http://localhost:${port}`)
})

