const validator = require('../helpers/validate.js');

const saveFaculty = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    password: 'required|string',
    lastName:'required|string',
    email:'required|email',
    phoneNumber:'required',
    country:'required|string',
    city:'required|string',
    isPublic:'required',
    faculty_name:'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const updateFaculty = (req, res, next) => {
  const validationRule = {
    username: 'required|string',
    password: 'required|string',
    lastName:'required|string',
    email:'required|email',
    phoneNumber:'required',
    country:'required|string',
    city:'required|string',
    isPublic:'required',
    faculty_name: 'required',
    profile: 'required'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveFaculty,
  updateFaculty
};