const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const rotaClientes = require('./routes/clientes')
const rotaProdutos = require('./routes/produtos')
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use('/clientes', rotaClientes);
app.use('/produtos', rotaProdutos);

app.listen(3000, () => {
    console.log('Express started at http://localhost:8000')
})