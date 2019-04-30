const mongoose = require("mongoose");

const CarmanufacturerSchema = new mongoose.Schema({
//tên hãng xe
 name:{type:String,required:true},
 //địa chỉ
address:{type:String,required:true},
//số điện thoại
phone:{type:Number,required:true},
//email liên hệ
email:{type:String,required:true},
//Logo
logo:{type:String}
});

const Carmanufacturer = mongoose.model('Carmanufacturer', CarmanufacturerSchema);
module.exports = {
    Carmanufacturer, CarmanufacturerSchema
}