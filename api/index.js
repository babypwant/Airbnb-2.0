const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const UserModel = require('./models/User')
require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(6);

const app = express()
app.use(express.json())

app.use(cors({
    credentials: true,
    origin: 'http://127.0.0.1:5173',
}))

mongoose.connect(process.env.MONGO_URL)



app.get('/test', (req, res) => {
    res.json('test ok')
})


app.post('/register', async (req,res) => {
    const {name, email, password} = req.body
    try {

        const userDoc = await UserModel.create({
            name,
            email,
            password: bcrypt.hashSync(password, bcryptSalt)
        })
        
        res.json(userDoc)
    }
    catch(e) {
        res.status(422).json(e)
    }

})

app.listen(4000);

console.log('Listening on port 4000...')