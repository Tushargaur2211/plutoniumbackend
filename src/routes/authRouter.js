const authController = require('../controllers/authorController');
const express = require('express');

const router = express.Router();

router
    .route('/authors').post(authController.authorModel);

router
    .route('/getAuthors').get(authController.getAuthor);

router
    .route('/login').post(authController.loginAuthor);


module.exports = router;
