const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //số lượng ghế ngồi trên chiếc xe
  data.numberofSeats = !isEmpty(data.numberofSeats) ? data.numberofSeats : "";
  //nhà sản xuất chiếc xe
  data.producer = !isEmpty(data.producer) ? data.producer : "";
//biển số xe
  data.licenseplate=!isEmpty(data.licenseplate)  ?data.licenseplate:"";
//năm sản xuấ xe
  data.manufaturingYear=!isEmpty(data.manufaturingYear)  ?data.manufaturingYear:"";
 

  // full name checks
  if (Validator.isEmpty(data.numberofSeats)) {
    errors.numberofSeats = "Number of Seats field is required";
  }

  // producer checks
  if (Validator.isEmpty(data.producer)) {
    errors.producer = "producer field is required";
  } 
  //manufaturingYear check
  if (Validator.isEmpty(data.manufaturingYear)) {
    errors.manufaturingYear = "manufaturingYear field is invalid";
  }
   //licenseplate check
   if (Validator.isEmpty(data.licenseplate)) {
    errors.licenseplate = "licenseplate field is invalid";
  }
  
  
  //kiểm tra năm sãn xuất vào phải có 10 chữ số

  if (!Validator.isInt(data.manufaturingYear)) {
    errors.manufaturingYear='manufaturingYear number '
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
