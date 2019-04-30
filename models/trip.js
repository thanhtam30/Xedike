const mongoose = require("mongoose");

const TripSchema = new mongoose.Schema({
//loại ce
carId:{type:mongoose.Schema.Types.ObjectId,ref:'Car'},
//hang xe
Carmanufacturer:{type:mongoose.Schema.Types.ObjectId,ref:'Carmanufacturer'},

//giá vé
price:{type:Number},
//thoi gian hoan thành
completiontime:{type:String,required:true},
//thời gian bắt đầu
timestart:{type:String,required:true},
//thời gian kết thúc
endtime:{type:String,required:true},
//Noi khỏi hành
startinggate:{type:String,required:true},
//nơi dến
Destination:{type:String,required:true},
//Nơi kết thúc
wherecompleted:{type:String,required:true},
//lịch trình chuyến xe
schedule:{type:[String]}
});

const Trip = mongoose.model('Trip', TripSchema);
module.exports = {
    Trip, TripSchema
}