const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {Driver} = require('../../models/driver');
const {authorizing} = require('../../middleware/auth')
const validateregisterDriver = require("../../validation/driver");
const passport = require('passport');
var fs=require('fs-extra')
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './upload/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

var upload = multer({ storage: storage });
// api:     /api/users/register
// desc:    register a new user
// access:  PUBLIC
router.get('/alldriver' ,passport.authenticate('jwt', {session: false}),authorizing('admin'),(req, res) => {
    Driver.find().then(driver=>
        res.json(driver)).catch(console.log)
})

router.post('/registerdriver',upload.single('driverImage'), passport.authenticate('jwt', {session: false}),authorizing('admin'),(req, res) => {
   
    if(typeof req.file=='undefined'){
        imageFile=''
    }else
    {
        imageFile=req.file.path
    }
    
    const {errors,isValid}=validateregisterDriver(req.body);
    if(!isValid){
        return res.status(400).json(errors)
    }
    
   // const {fullName, email,phone,address, IDcardnumber,DOB,Issuedbyidentitycard,driverlicensenumber,Driverslicense,Driverslicensetime,License,experience} = req.body;
    Driver.findOne({email:req.body.email}).then(driver=>{
        if(driver){
            errors.noemail='Email is already'
            res.status(400).json(errors)
        }else{
            Driver.findOne({phone:req.body.phone}).then(phone=>{
                if(phone){
                    errors.nophone='Phone is already'
                    res.status(400).json(errors)
                }
                const newDriver = new Driver({
                    fullName:req.body.fullName
                    , email:req.body.email
                    ,phone:req.body.phone
                    ,address:req.body.address,
                     IDcardnumber:req.body.IDcardnumber
                     ,DOB:req.body.DOB,
                     Issuedbyidentitycard:req.body.Issuedbyidentitycard
                     ,driverlicensenumber:req.body.driverlicensenumber
                     ,Driverslicense:req.body.Driverslicense
                     ,Driverslicensetime:req.body.Driverslicensetime
                     ,License:req.body.License
                     ,experience:req.body.experience,driverImage:imageFile
                    
                })
                newDriver.save()
                        .then(driver => {
                            res.status(200).json(driver)
                            console.log(driver);
                            
                        })
                        .catch(console.log)
                
            })
        }
       
        
    }).catch(err => res.status(400).json(err))  
   
})
///////////
router.get('/editdriver/:_id',(req,res)=>{
    Driver.findById(req.params._id).then(driver=>res.json(driver)).catch(console.log)
})
router.post('/editdriver/:_id',upload.single('driverImage'),(req,res)=>{
    const {errors,isValid}=validateregisterDriver(req.body);
    if(!isValid){
        return res.status(400).json(errors)
    }
   Driver.findById(req.params._id).then(driver=>{
    if (typeof(req.file) == 'undefined') {
        driver.fullName=req.body.fullName;
        driver.email=req.body.email;
        driver.phone=req.body.phone;
        driver.address=req.body.address;
        driver.DOB=req.body.DOB;
        driver.IDcardnumber=req.body.IDcardnumber;
        driver.Leveltimeidentitycard=req.body.Leveltimeidentitycard;
        driver.Issuedbyidentitycard=req.body.Issuedbyidentitycard;
        driver.driverlicensenumber=req.body.driverlicensenumber;
        driver.Driverslicense=req.body.Driverslicense;
        driver.Driverslicensetime=req.body.Driverslicensetime;
        driver.License=req.body.License;
        driver.experience=req.body.experience;
        driver.save().then(driver=>res.json(driver)).catch(console.log)
        console.log(driver);
        
    }else
    {
        var path=driver.driverImage;
        fs.remove(path)
        driver.fullName=req.body.fullName;
        driver.email=req.body.email;
        driver.phone=req.body.phone;
        driver.address=req.body.address;
        driver.DOB=req.body.DOB;
        driver.IDcardnumber=req.body.IDcardnumber;
        driver.Leveltimeidentitycard=req.body.Leveltimeidentitycard;
        driver.Issuedbyidentitycard=req.body.Issuedbyidentitycard;
        driver.driverlicensenumber=req.body.driverlicensenumber;
        driver.Driverslicense=req.body.Driverslicense;
        driver.Driverslicensetime=req.body.Driverslicensetime;
        driver.License=req.body.License;
        driver.experience=req.body.experience;
        driver.driverImage=req.file.path
        driver.save().then(driver=>res.json(driver)
        
        
        ).catch(console.log)
        console.log(driver);
        
    }
      
   })
   
    
})
router.delete('/:id', (req, res) => {
    Driver.findById(req.params.id,(err,driver)=>{
        var path=driver.driverImage;
        fs.remove(path)
        driver.remove().then(()=>res.json({success:true}))
    })
     
      .catch(res => res.status(404).json({ success: false }));
  });
module.exports = router;