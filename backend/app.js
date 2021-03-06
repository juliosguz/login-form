const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const cors = require('cors')
// const errorHandler = require('http-errors')

const app = express()

app.use(bodyParser.json())
app.use(cors())

function createError (res, status, message) {
  res.status(status).json({ message })
}

/**
 Los verbos HTTP que deberia utilizar un formulario pueden ser POST o PUT
 /auth/login (POST) -> Esta ruta me servira para autenticarme y me devolvera un token
 /auth/verify (GET) -> Verificar el token
*/

app.post('/auth/login', (req, res, next) => {
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
    // res
    //   .status(412)
    //   .json({ message: 'Credenciales invalidas' })
    createError(res, 412, 'Credenciales invalidas')
  }
})

app.get('/auth/verify', (req, res) => {
  const { token } = req.query
  try {
    jwt.verify(token, process.env.SECRET)
    res.json({ status: 'ok', message: 'Token valido' })
  } catch (error) {
    // res
    //   .status(400)
    //   .json({ status: 'error', message: 'Token invalido' })
    createError(res, 400, 'Token invalido')
  }
})

app.use((req, res) => {
  // res
  //   .status(404)
  //   .json({ message: 'No se encontro nada' })
  createError(res, 404, 'No se encontro nada')
})

app.listen(3000)
