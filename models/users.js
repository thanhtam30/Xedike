const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  //email khách hàng
  email: { type: String, required: true },
  //mật khảu
  password: { type: String, required: true },
//tên đầy đủ
  fullName: { type: String, required: true },
  //số diện thoại
  phone: { type: String, required: true },
  //ngày sinh
  DOB: { type: Date, required: true },
//quyền
  userType: {type: String, default:'user'},
  //Hình ảnh
  image:{type:String}
});

const User = mongoose.model('User', UserSchema);
module.exports = {
    User, UserSchema
}