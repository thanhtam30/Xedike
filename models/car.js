const mongoose = require("mongoose");
const Schema=mongoose.Schema;
const CarSchema = new mongoose.Schema({
    //tài xế ce
 driver: {
    type: Schema.Types.ObjectId,
    ref:'Driver'
},

//tên chiếc xe
Name:{type:[String]},
//số lượng ghế
numberofSeats:{type:String},
//Năm sản xuất
manufaturingYear:{type:Number},
//hình ảnh xe
carImage:{type:[String]},
//Nhà sản xuất
producer:{type:String},
//biển số xe
licenseplate:{type:String}
});
module.exports = Car = mongoose.model('Car', CarSchema);
