const express = require('express');
const router = express.Router();
// const authorModel= require("../models/authorModel")
// const blogModel= require("../models/blogModel")
const authorController= require("../controllers/authorController")
const blogController= require("../controllers/blogController")


router.post("/createAuthor", authorController.createAuthor)

router.post("/createBlog", blogController.createBlog)


module.exports = router;