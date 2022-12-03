require('dotenv').config()
require('./config/dataBase')

const express = require('express')
const app = express()
const PORT = process.env.PORT;
const bodyParser = require('body-parser')
var cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')



app.use(express.urlencoded({extended : true}))


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Census APP',
            version: '1.0.0'
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ]

    },
    apis : ['./routers/*.js']
}

const swaggerSpac = swaggerJsDoc(options)
// const bodyParser = require('body-parser')
app.use('/api-doc',swaggerUI.serve, swaggerUI.setup(swaggerSpac))


// midlwares
app.use(express.json())
app.use(cors())

// routers New 


 
const census = require('./routers/census')
const addNyc = require('./routers/addNyc')
const getAllCensus = require("./routers/getAllCensus")
const adminLogin = require("./routers/adminLogin")



app.use('/api',census);
app.use('/api',addNyc);
app.use('/api',getAllCensus);
app.use('/api',adminLogin);


app.get('/',(req,res)=>{
    res.status(200).json({msg: "census app working successfully"})
})













app.listen(PORT,"0.0.0.0", function(){
    console.log('server started successfully')
})