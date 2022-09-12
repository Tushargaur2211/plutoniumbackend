const blogController = require('../controllers/blogController');
const authController = require('../controllers/authorController');
const express = require('express');

const router = express.Router();

router      
    .route('/blogs').post(authController.protectingMID, blogController.craeteBlog);
router
    .route('/blogs').get(authController.protectingMID, blogController.getBlogs);
router
    .route('/blogs/:blogID').put(authController.protectingMID, blogController.updateblogsId);
router
    .route('/blogs/:blogID').delete(authController.protectingMID, blogController.deletedBlogs);

module.exports = router;

