const mongoose = require('mongoose');
let db = require('../db')

let Schema = mongoose.Schema

let houseSchema = new Schema({
  name: {type: String, required: true},
  price: {type: Number, required: true},
  address: {type: String, required: true},
  longitude: {type: Number},
  latitude: {type: Number},
  image: [{type: String}]
}, {
  timestamps: true
})

module.exports = mongoose.model('House', houseSchema);
