const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const userAuthorization = require("../middelware/userAuthorization")



// router.post("/createAuthor", authorController.createAuthor)
// router.post("/login",userAuthorization.getToken)
// router.post("/createBlog",userAuthorization.authenticate,userAuthorization.authorisation, blogController.createBlog)

// router.get("/getBlog", userAuthorization.authenticate, blogController.getBlog)

// router.put("/upDate/:blogId",userAuthorization.authenticate,userAuthorization.authorisation, blogController.upDate)

// router.delete("/deleteData/:blogId",userAuthorization.authenticate,userAuthorization.authorisation, blogController.deleteData)
// router.delete("/deleteBlogByQuery",userAuthorization.authenticate,userAuthorization.auth, blogController.deleteBlogByQuery)
 

module.exports = router;