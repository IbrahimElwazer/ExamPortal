const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/register', (req, res) => {
    const userData = {
        email: req.body.email,
        password: req.body.password,
        type: req.body.type
    }

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status: user.email + ' has been registered successfully!'})
                })
                .catch(err => {
                    res.send('error: ' + err)
                })
            })
        }else{
            res.json({error: "This user already exists"})
        }
    })
    .catch(err => {
        res.send('error: ' + err)
    })
})


app.post('/login', (req, res) => {

    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, 'secret', {
                    expiresIn: 1440
                })
                res.send(token)
            }
        }else{
            res.status(400).json({ error: 'User does not exist !'})
        }
    })
    .catch(err => {
        res.status(400).json({error: err})
    })
})

// Listening on port 4000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
