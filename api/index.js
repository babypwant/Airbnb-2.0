const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const UserModel = require('./models/User')
require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(6);
const jwtSecret = process.env.JWT_SECRET

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

app.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userDoc = await UserModel.findOne({email})
    if(userDoc) {
        const passwordOk = bcrypt.compareSync(password, userDoc.password) 
        if (passwordOk) {
            jwt.sign({email: userDoc.email, id:userDoc._id},jwtSecret, {}, (err, token) => {
                if(err) throw err;
                res.cookie('token', token).json('passok')
            })
        }else {
            res.status(422).json('pass not ok')
        }
    }else{
        res.json('not found')
    }
})

app.listen(4000);

console.log('Listening on port 4000...')