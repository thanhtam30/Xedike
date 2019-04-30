const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.phone=!isEmpty(data.phone)  ?data.phone:"";

  // Name checks
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
  //kiểm tra số điện thoại nhập vào phải có 10 chữ số
  if (!Validator.isLength(data.phone, { min: 10, max: 10 })) {
    errors.phone='Phone number must be 10 digits'
  }
  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

 

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
