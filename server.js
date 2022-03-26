const express = require('express')
const port = process.env.PORT || 8000
const https = require('https')

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})


app.post('/', (req, res) => {
  const message = `
  Message from ${req.body.name}
  Email: ${req.body.email}
  Feedback: ${req.body.feedback}`

  send_telegram_message(message)

  res.status(201).sendFile(`${__dirname}/public/index.html`)
})


function send_telegram_message(message) {
  const token = process.env.TOKEN
  const chat_id = process.env.CHAT_ID

  const url_req = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${message}`
  https.get(url_req)
}


app.listen(port, () => {
  console.log(`Server has been started on http://localhost:${port}`)
})

