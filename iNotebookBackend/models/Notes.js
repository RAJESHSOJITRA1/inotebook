const mongoose = require('mongoose'); 


const NotesSchema = new Schema({
  title:{
    type:String,
    require:true
  },
  description:{
    type:String,
    require:true,
    unique:true
  },
  tag:{
    type:String,
    default:"general"
  },
  date:{
    type:Date,
    default:date.now
  }
});

module.exports=mongoose.model('notes',NotesSchema);