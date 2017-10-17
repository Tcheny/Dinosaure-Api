import mongoose from 'mongoose'; // middleware mongoose

// Création du Schema et model
const Schema = mongoose.Schema;
let NewDino = new Schema({
  name : {
    type : String, required : true
  },
  size : {
    type : Number, required : true
  },
  food : {
    type : String, required : true
  }
},{ versionKey: false })

export default mongoose.model('Dino', NewDino);
