const mongoose  = require('mongoose');
const IssueSchema  = new mongoose.Schema({
  user:{
    type:String,
    required:true
  },
  ticket_status:{
    type:String,
    required:true
  },
   ticket_prior:{
   type:String,
   required: true
 },
 ticket_type:{
   type:String,
   required:true
 },
 host_name:{
   type:String,
   required:true
 },
 comment:{
   type:String,
   required:true
 },
 file:{
   type:String,

 },  date: {
     type: Date,
     default: Date.now
   }

});

const Issue  =  mongoose.model('Issue', IssueSchema);
module.exports = Issue;
