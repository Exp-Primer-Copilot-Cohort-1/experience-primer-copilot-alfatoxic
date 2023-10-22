// Create web server
// This file handles all the requests related to the comments

// Load the required packages
var express = require('express');
var router = express.Router();

// Load the comment model
var Comment = require('../models/comment');

// Create endpoint for /api/comments for POST
router.post('/comments', function(req, res) {
  // Create a new instance of the comment model
  var comment = new Comment();

  // Set the comment properties that came from the POST data
  comment.text = req.body.text;
  comment.author = req.body.author;
  comment.post = req.body.post;

  // Save the comment and check for errors
  comment.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Comment added to the post!', data: comment });
  });
});

// Create endpoint for /api/comments for GET
router.get('/comments', function(req, res) {
  // Use the comment model to find all comments
  Comment.find(function(err, comments) {
    if (err)
      res.send(err);

    res.json(comments);
  });
});

// Create endpoint for /api/comments/:comment_id for GET
router.get('/comments/:comment_id', function(req, res) {
  // Use the comment model to find a specific comment
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err)
      res.send(err);

    res.json(comment);
  });
});

// Create endpoint for /api/comments/:comment_id for PUT
router.put('/comments/:comment_id', function(req, res) {
  // Use the comment model to find a specific comment
  Comment.findById(req.params.comment_id, function(err, comment) {
    if (err)
      res.send(err);

    // Update the existing comment text
    comment.text = req.body.text;

    // Save the comment and check for errors
    comment.save(function(err) {
      if (err)
        res.send(err);

      res.json(comment);
    });
  });
});

// Create endpoint for /api/comments/:comment_id for DELETE
router.delete('/comments/:comment_id', function(req, res) {
  // Use the comment model to find a specific comment and remove it
  Comment.findByIdAndRemove(req.params.comment_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Comment removed from the post!' });
  });
});

//