var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Blog = require('../../models/Blog');
router.get('/', function(req, res){
  res.render('index');
});
router.route('/insert')
.post(function(req,res) {
 var blog = new Blog();
  blog.title = req.body.title;
  blog.auther = req.body.auther;
  blog.description = req.body.description;
  blog.date = req.body.date;
  blog.comments = req.body.comments;
blog.save(function(err) {
      if (err)
        res.send(err);
      res.send('Blog successfully added!');
  });
});

// router.get('/',function(req, res) {
//  var titleRec = req.query.title;
//  var autherRec = req.query.auther;
//  if(titleRec && titleRec != ''){
//   Blog.find({$and: [ {title: titleRec}, {auther: autherRec}]}, function(err, blogs) {
//    if (err)
//     res.send(err);
//    res.json(blogs);
//   });
//  } else {
//   Blog.find({auther: autherRec}, function(err, blogs) {
//    if (err)
//     res.send(err);
//    res.json(blogs);
//   });
//  }
// });


router.get('/',function(req, res) {
 // var titleRec = req.query.title;
 // var autherRec = req.query.auther;
 // if(titleRec && titleRec != ''){
 //  Blog.find({$and: [ {title: titleRec}, {auther: autherRec}]}, function(err, blogs) {
   //if (err)
    res.send(blogs);
  // res.json(blogs);
 //  });
 // } else {
 //  Blog.find({auther: autherRec}, function(err, blogs) {
 //   if (err)
 //    res.send(err);
 //   res.json(blogs);
 //  });
 // }
});

module.exports = router;