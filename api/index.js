const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const UserModel = require('./models/User')
const PlaceModel = require('./models/Place')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const imageDownloader = require('image-downloader')
const multer = require('multer')
const fs = require('fs')
require('dotenv').config()

const bcryptSalt = bcrypt.genSaltSync(6);
const jwtSecret = process.env.JWT_SECRET

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use('/uploads', express.static(__dirname + '/uploads'))

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
            jwt.sign({
                email: userDoc.email, 
                id:userDoc._id, 
                }
                ,jwtSecret, {}, (err, token) => {

                if(err) throw err;
                res.cookie('token', token).json(userDoc)
            })
        }else {
            res.status(422).json('pass not ok')
        }
    }else{
        res.json('not found')
    }
})

app.get('/profile', (req,res) => {
    const {token} = req.cookies;
    if(token) {
        jwt.verify(token, jwtSecret, {}, async (err, userData) => {
            if(err)throw err;
            const {name, email, id} = await UserModel.findById(userData.id)
            res.json({name, email, id})
        })
    }else { 
        res.json(null);
    }
})


app.post('/logout', (req,res) => {
    res.cookie('token', '').json(true);
})

app.post('/upload-by-link', async (req,res) => {
    const {link} = req.body;
    const newName = 'photo' + Date.now() + '.jpg'
    await imageDownloader.image({
        url: link,
        dest: __dirname + '/uploads/' + newName,
    })
    res.json(newName)
})

const photoMiddleware = multer({dest:'uploads'})
app.post('/upload',photoMiddleware.array('photos', 100), (req,res) => {
    const uploadedFiles = [];
    for(let i = 0; i< req.files.length; i++) {
        console.log(req.files[i])
        const {path, originalname} = req.files[i]
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1]
        console.log('ext', ext)
        const newPath = path + '.' + ext
        fs.renameSync(path, newPath)
        uploadedFiles.push(newPath.replace('uploads/', ''));
        
    }
    console.log('uploaded files:', uploadedFiles)
    res.json(uploadedFiles);
})

app.post('/places', (req,res) => {
    const token = req.cookies.token;
    const {
        title,
        address,
        addedPhotos, 
        description,
        perks,
        extraInfo,
        checkIn,
        checkOut,
        maxGuests
    } = req.body
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        if(err)throw err;
        const placeDoc = await PlaceModel.create({
            owner: userData.id,
            title,
            address,
            addedPhotos, 
            description,
            perks,
            extraInfo,
            checkIn,
            checkOut,
            maxGuests
        })
        res.json(placeDoc)
    })
})

app.get('/places', (req,res) => {
    const token = req.cookies.token;
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
        const {id} = userData;
        res.json(await PlaceModel.find({owner:id}))
    })



})

app.listen(4000);

console.log('Listening on port 4000...')