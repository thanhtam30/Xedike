const express = require('express');
const router = express.Router();
const {Carmanufacturer} = require('../../models/carmanufacturer');
const {authorizing} = require('../../middleware/auth')
const validatorcarmanufacturer = require("../../validation/carmanufature");
const passport = require('passport');
var fs=require('fs-extra')
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './client/public/upload/Carmanufacturer/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

var upload = multer({ storage: storage });
// api:     /api/users/register
// desc:    register a new user
// access:  PUBLIC
router.get('/allcarmanufacturer' ,passport.authenticate('jwt', {session: false}),authorizing('admin'),(req, res) => {
    Carmanufacturer.find().then(carmanufature=>
        res.json(carmanufature)).catch(console.log)
})

//api:newcarmanufature
router.post('/newcarmanufature',upload.single('logo'), passport.authenticate('jwt', {session: false}),authorizing('admin'),(req, res) => {
    const {errors,isValid}=validatorcarmanufacturer(req.body);
    if(!isValid){
        return res.status(400).json(errors)
    }
    if(typeof req.file=='undefined'){
        imageFile=''
    }else
    {
        imageFile=req.file.filename
    }
    const {name, address,  phone,email} = req.body;
    
    Carmanufacturer.findOne({name})
    .then(carmanufature => {

        if(carmanufature){
            errors.noname='Name Exit'
            res.status(400).json(errors)
        }
           
        const newcarmanufature = new Carmanufacturer({
            name, email,  phone, address,logo:imageFile
            
        })

        newcarmanufature.save()
                    .then(carmanufature => {
                        res.status(200).json(carmanufature)
                    })
                    .catch(err => res.status(400).json(err))
      
    })
    .catch(err => res.status(400).json(err))  
})
//edit
router.get('/editcarmanufature/:_id',(req,res)=>{
    Carmanufacturer.findById(req.params._id).then(carmanufature=>res.json(carmanufature)).catch(console.log)
})
router.post('/editcarmanufature/:_id',upload.single('logo'),(req,res)=>{
    const {errors,isValid}=validatorcarmanufacturer(req.body);
    if(!isValid){
        return res.status(400).json(errors)
    }
   Carmanufacturer.findById(req.params._id).then(carmanufature=>{
    if (typeof(req.file) == 'undefined') {
        carmanufature.name=req.body.name;
        carmanufature.email=req.body.email;
        carmanufature.phone=req.body.phone;
        carmanufature.address=req.body.address;
      
        carmanufature.save().then(carmanufature=>res.json(carmanufature)).catch(console.log)   
    }else{
        var path='./client/public/upload/Carmanufacturer/'+carmanufature.logo;
        fs.remove(path);
        carmanufature.name=req.body.name;
        carmanufature.email=req.body.email;
        carmanufature.phone=req.body.phone;
        carmanufature.address=req.body.address;
        carmanufature.logo=req.file.filename
        carmanufature.save().then(carmanufature=>res.json(carmanufature)).catch(console.log)
    }
     
   })
   

    
})
router.delete('/:id', (req, res) => {
    Carmanufacturer.findById(req.params.id,(err,carmanufature)=>{
        var path='./client/public/upload/Carmanufacturer/'+carmanufature.logo;
        fs.remove(path)
        carmanufature.remove().then(()=>res.json({success:true}))
    })
     
      .catch(res => res.status(404).json({ success: false }));
  });
module.exports = router;