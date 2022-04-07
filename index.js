const isLowercase = require('./strings/isLowercase').isLowercase
const capitalizeFirstLetter = require('./strings/capitalizeFirstLetter').capitalizeFirstLetter
const sortObjectOfObjects = require('./objects/sortObjectOfObjects').sortObjectOfObjects
const displayMessageOnDOM = require('./dom/displayMessageOnDOM').displayMessageOnDOM
const sortArray = require('./arrays/sortArray').sortArray
const sortArrayOfObjects = require('./arrays/sortArrayOfObjects').sortArrayOfObjects

const utils = {
    arrays: {
        sortArray,
        sortArrayOfObjects
    },
    dom: {
        displayMessageOnDOM,
    },
    objects: {
        sortObjectOfObjects,
    },
    strings: {
        isLowercase,
        capitalizeFirstLetter,
    },
  };
  
module.exports = utils;