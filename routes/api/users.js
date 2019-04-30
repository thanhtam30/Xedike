const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const {User} = require('../../models/users');
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
const key=require('../../config/key');
// api:     /api/users/register
// desc:    register a new user
// access:  PUBLIC
router.post('/signup', (req, res) => {
    const {errors,isValid}=validateRegisterInput(req.body);
    if(!isValid){
        return res.status(400).json(errors)
    }
    const {email, password, fullName, phone, DOB, userType} = req.body;

    User.findOne({$or: [{email}, {phone}]})
        .then(user => {

            // user exists
           
            
           
            if(user) {
                errors.nouser='Phone  exists '
                return res.status(400).json(errors);
            }
           

            // user not exist
            const newUser = new User({
                email, password, fullName, phone, DOB, userType
            })

            bcrypt.genSalt(10, (err, salt) => {
                if(err) return res.status(400).json(err)

                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) return res.status(400).json(err)

                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            res.status(200).json(user)
                        })
                        .catch(err => res.status(400).json(err))
                })
            })
        })
        .catch(err => res.status(400).json(err))        
})

// api:     /api/users/login
// desc:    log into system
// access:  PUBLIC
router.post('/login', (req, res) => {
    const {errors,isValid}=validateLoginInput(req.body)
    if(!isValid){
        return res.status(400).json(errors);
    }
    const {email, password} = req.body;

    User.findOne({email})
        .then(user => {
            if(!user) {

                errors.emailnotfound='Email is not correct'
                return res.status(404).json(errors)
            }

            bcrypt.compare(password, user.password)
                .then(result => {
                    if(!result) {
                        errors.passwordnotfound='Password is not connect'
                        return res.status(404).json(errors)
                    }

                    const payload = {
                        id: user._id,
                        email: user.email,
                        userType: user.userType,
                        fullName: user.fullName
                    }
                    
                    jwt.sign(
                        payload,
                        key.secretOrKey,
                        {expiresIn: '1h'},
                        (err, token) => {
                            if(err) return res.status(400).json(err)

                            res.status(200).json({
                                msg: "Login success",
                                token: "Bearer " + token
                            })
                        }
                    )
                })
                .catch(err => res.status(400).json(err))
        })
        .catch(err => res.status(400).json(err))

})



module.exports = router;