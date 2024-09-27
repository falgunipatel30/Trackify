const mongoose  = require('mongoose');
const DomainSchema  = new mongoose.Schema({
 domain:{
   type:String,
   required: true
 },

 email:{
   type:String,
   required:true
 }

});

const Domain  =  mongoose.model('Domain', DomainSchema);
module.exports = Domain;
