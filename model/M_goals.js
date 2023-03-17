const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"user"
  } ,
  text : {type:String , required: true}
}, { timestamps: true })


module.exports = mongoose.model("goal" , Schema)