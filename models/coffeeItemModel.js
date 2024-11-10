// coffeeItemModel.js
const mongoose = require('mongoose');

const coffeeItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tag: {
    type: String,
    trim: true,
  },
  details: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  images: [
    {
      type: String, // URL or path to the image file
    },
  ],
}, {
  timestamps: true,
});

const CoffeeItem = mongoose.model('CoffeeItem', coffeeItemSchema);
module.exports = CoffeeItem;
