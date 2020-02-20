const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Question = require('./models/Questions');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// this route was made just to encrypt or hash the password when creating the user
// this route does not have a UI, therefore you can not sign up, the emails and passwords
// are usually given by the school (just as OAMK students services did in the first week of classes)
// The teacher and student accounts are default
// Teacher login credentials.. email: teacher@oamk.fi / password: iamateacher
// Student login credentials.. email: t8elib00@students.oamk.fi / password: iamastudent

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

app.get('/questions', (req, res) => {
    Question.findAll()
    .then(question => {
        res.json(question) 
    })
    .catch(err => {
        res.send('err :' + err)
    })
})

app.get('/questions/:id', (req, res) => {
    Question.findOne({
        where: {
            ID: req.params.id
        }
    }).then(question => {
        if(question){
            res.json(question)
        } else{
            res.send('This question does not exist')
        }
    }).catch(err => {
        res.send('err: ' + err)
    })
})

app.post('/questions', (req, res) => {
    if(!req.body.title && !req.body.category){
        res.send(400)
        res.json({ error: "Bad Data"})
    } else{
        Question.create(req.body)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send('error: ' + err)
        })
    }
})

app.delete('/questions/:id', (req, res) => {
    Question.destroy({
        where: {
            ID: req.params.id
        }
    }).then(() => {
        res.json({
            status: "The question was deleted!"
        })
    }).catch(err => {
        res.send('error: ' + err)
    })
})



// Listening on port 4000
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
