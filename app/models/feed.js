var mongoose = require('mongoose');

module.exports = mongoose.model('Feed', {

    status : {type : String, default: ''}

});