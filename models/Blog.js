//models/Expense.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var blogSchema = new mongoose.Schema({
  title: String,
  auther: String,
  description: String,
  date: Date,
  comments:String
});	
module.exports = mongoose.model('Blog', blogSchema);