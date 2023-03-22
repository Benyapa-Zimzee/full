const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require('mongoose')
const db = require('./app/models')
const cors = require('cors')

//parse requests of content-type -application/json
app.use(express.json())

//parse requests of content-type -application/z-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

var corsOptions = {
    origin: "http://localhost"
}

app.use(cors(corsOptions))

mongoose.connect(db.url)
        .then(() => {
            console.log('Connected to the database!')   
        })
        .catch(err => {
            console.log('Can not connect to the database', err)
        })

/* app.get('/', (req, res) => {
    res.send('Default route')
}) */

require('./app/routes/student.routes')(app)


app.listen(PORT , () => console.log(`Server started on port ${PORT}`))