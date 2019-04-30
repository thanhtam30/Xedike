const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
    //quyền admin để thêm tài xế lái xe
 userId:{type:mongoose.Schema.Types.ObjectId,
    ref:'User'
},
//tên tài xế
fullName:{type:String,required:true},
//email tài xế
email:{type:String,required:true},
//số điện thoại
phone:{type:Number},
//địa chỉ tài xế
address:{type:String,required:true},
//ngày sinh
DOB:{type:Date},
//số chứng minh nhân dan
IDcardnumber:{type:String},
//thời gian cấp chứng minh nhân dân
Leveltimeidentitycard:{type:Date},
//hình ảnh
driverImage:{type:String},
//Nơi cấp chứng minh nhân dân
Issuedbyidentitycard:{type:String},
//mã số bằng lái xe
driverlicensenumber:{type:Number,required:true},
//Nơi cấp bằng lái xe
Driverslicense:{type:String},
//thời gian cấp bằng lái xe
Driverslicensetime:{type:Date},
//cấp bằng lái
License:{type:String},
//kinh nghiệm
experience:{type:Number}
});

const Driver = mongoose.model('Driver', DriverSchema);
module.exports = {
    Driver, DriverSchema
}