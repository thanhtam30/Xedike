const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
//  data.password = !isEmpty(data.password) ? data.password : "";
  data.address=!isEmpty(data.address)  ?data.address:"";
  data.IDcardnumber=!isEmpty(data.IDcardnumber)  ?data.IDcardnumber:"";
  data.phone=!isEmpty(data.phone)  ?data.phone:"";
  data.DOB = !isEmpty(data.DOB) ? data.DOB : "";
  data.Leveltimeidentitycard = !isEmpty(data.Leveltimeidentitycard) ? data.Leveltimeidentitycard : "";
//  data.password = !isEmpty(data.password) ? data.password : "";
  data.Issuedbyidentitycard=!isEmpty(data.Issuedbyidentitycard)  ?data.Issuedbyidentitycard:"";
  data.driverlicensenumber=!isEmpty(data.driverlicensenumber)  ?data.driverlicensenumber:"";
  data.Driverslicense=!isEmpty(data.Driverslicense)  ?data.Driverslicense:"";
  data.Driverslicensetime=!isEmpty(data.Driverslicensetime)  ?data.Driverslicensetime:"";
  data.License=!isEmpty(data.License)  ?data.License:"";
  data.experience=!isEmpty(data.experience)  ?data.experience:"";
////
if (Validator.isEmpty(data.IDcardnumber)) {
  errors.IDcardnumber = "IDcardnumber field is required";
}
  // full name checks
  if (Validator.isEmpty(data.fullName)) {
    errors.fullName = "Name field is required";
  }

  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //phone check
  if (Validator.isEmpty(data.phone)) {
    errors.phone = "Phone field is invalid";
  }
   //address check
   if (Validator.isEmpty(data.address)) {
    errors.address = "Address field is invalid";
  }
  // //DOB check
  if (Validator.isEmpty(data.DOB)) {
    errors.DOB = "Birthday field is invalid";
  }
  //DOB check
  if (Validator.isEmpty(data.IDcardnumber)) {
    errors.IDcardnumber = "IDcardnumber field is invalid";
  }
  //Leveltimeidentitycard
  if(Validator.isEmpty(data.Leveltimeidentitycard)){
    errors.Leveltimeidentitycard='Level time identity card field is invalid'
  }
  //Issuedbyidentitycard
  if(Validator.isEmpty(data.Issuedbyidentitycard)){
    errors.Issuedbyidentitycard='Issued by identity card field is invalid'
  }
  //driverlicensenumber
  if(Validator.isEmpty(data.driverlicensenumber)){
    errors.driverlicensenumber='driver license number field is invalid'
  }
  // //Driverslicense
  if(Validator.isEmpty(data.Driverslicense)){
    errors.Driverslicense='Drivers license field is invalid'
  }
  // //Leveltimeidentitycard
  if(Validator.isEmpty(data.Leveltimeidentitycard)){
    errors.Leveltimeidentitycard='Level time identity card field is invalid'
  }
  
  // //Driverslicensetime
  if(Validator.isEmpty(data.Driverslicensetime)){
    errors.Driverslicensetime='Drivers license time field is invalid'
  }
  //License
  if(Validator.isEmpty(data.License)){
    errors.License='License field is invalid'
  }
  //Driverslicense
  if(Validator.isEmpty(data.experience)){
    errors.experience='experience field is invalid'
  }
  //kiểm tra số điện thoại nhập vào phải có 10 chữ số
  if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone='Phone number must be 10 digits'
  }
  if (!Validator.isInt(data.phone)) {
    errors.phone='Phone number '
  }
  if (!Validator.isInt(data.driverlicensenumber)) {
    errors.driverlicensenumber='Phone number '
  }
  if(!Validator.isInt(data.IDcardnumber)){
    errors.IDcardnumber='IDcardnumber number'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
