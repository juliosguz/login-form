const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

/**
 Los verbos HTTP que deberia utilizar un formulario pueden ser POST o PUT
 /auth/login (POST) -> Esta ruta me servira para autenticarme y me devolvera un token
 /auth/verify (GET) -> Verificar el token
*/

app.post('/auth/login', (req, res) => {
  const token = jwt.sign({
    origin: 'Juliosguz Twitch',
    creationDate: new Date()
  }, process.env.SECRET)
  const { username, password } = req.body
  if (
    username &&
    password &&
    username === 'juliosguz' &&
    password === 'qwer1234'
  ) {
    res.json({ token })
  } else {
    res.json({ message: 'Credenciales invalidas' })
  }
})

app.get('/auth/verify', (req, res) => {
  const { token } = req.query
  try {
    jwt.verify(token, process.env.SECRET)
    res.json({ status: 'ok', message: 'Token valido' })
  } catch (error) {
    res.json({ status: 'error', message: 'Token invalido' })
  }
})

app.listen(3000)
