const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  
  data.name = !isEmpty(data.name) ? data.name : "";
  
  data.address = !isEmpty(data.address) ? data.address : "";
//biển số xe
  data.phone=!isEmpty(data.phone)  ?data.phone:"";
//năm sản xuấ xe
  data.email=!isEmpty(data.email)  ?data.email:"";
 

  // full name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // producer checks
  if (Validator.isEmpty(data.address)) {
    errors.address = "address field is required";
  } 
  //manufaturingYear check
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "phone field is invalid";
  }
   //licenseplate check
   if (Validator.isEmpty(data.email)) {
    errors.email = "email field is invalid";
  }
  
  
  //kiểm tra năm sãn xuất vào phải có 10 chữ số

  if (!Validator.isEmail(data.email)) {
    errors.email='incorrect email format  '
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
