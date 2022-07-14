const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 5000
app.listen(PORT ,()=>console.log('Server running...'))