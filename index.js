const express = require('express')
const app = express()
const responseHandler = require('./internal/handler/handler')
const {ResponseHandler, response} = require('./internal/handler/handler')

require('dotenv').config()

const port = process.env.PORT 

const resHandler = new ResponseHandler()
app.get('/ping',resHandler.response)
app.get('/ping2',response)
app.post('/login',)

app.listen(port,()=>{
    console.log(`sedang berjalan di ${port}`)
})