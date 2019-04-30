const express=require('express');
const router=express.Router();
const {authorizing} = require('../../middleware/auth')
const Car=require('../../models/car')
const {Driver}=require('../../models/driver')
const validaterCar=require('../../validation/car')
const passport=require('passport')
router.get('/',passport.authenticate('jwt', {session: false}),authorizing('admin'),(req,res)=>{
  // Car.find({}).populate('driver', 'fullName phone', Driver)
//    Car.findOne({ driver: req.driver._id })
//    .populate('drivers', ['fullName'])
Car.find()
    .populate('driver', ['fullName' ,'_id'])
    .then(driver=>{
        res.json(driver)
    }).catch(console.log)
})

router.post('/',passport.authenticate('jwt', {session: false}),authorizing('admin'),(req,res)=>{
    const {numberofSeats, producer,manufaturingYear,licenseplate,driver} = req.body;
    // const {errors,isValid}=validaterCar(req.body);
    // if(!isValid){
    //     return res.status(400).json(errors)
    // }
       Car.findOne({licenseplate}).then(car=>{
        //    if(licenseplate) {
        //        errors.nolicenseplate='License plates have been registered '
        //    }
           const newCar = new Car({
            numberofSeats, producer,manufaturingYear,licenseplate,driver
        })
        newCar.save().then(car=>res.json(car))
       })
    
})

router.get('/editcar/:_id',(req,res)=>{
   Car.findById(req.params._id).populate('driver','fullName email  phone -_id').then(car=>{
       res.json(car)
   }).catch(console.log)
})
router.post('/editcar/:_id',(req,res)=>{
    const {numberofSeats, producer,manufaturingYear,licenseplate} = req.body;
    Car.findByIdAndUpdate(req.params._id,req.body,{new:true}).then(car=>{
        res.json(car)
    }).catch(console.log)
      
 })
 router.delete('/:id', (req, res) => {
    Car.findById(req.params.id,(err,car)=>{
        
        car.remove().then(()=>res.json({success:true}))
    })
     
      .catch(res => res.status(404).json({ success: false }));
  });
module.exports=router;
