// const { count } = require("console")
const BlogModel = require("../models/blogModel");

const createBlog = async function (req, res) {
  let data = req.body;

  let savedData = await BlogModel.create(data);
  res.send({ msg: savedData });
};

module.exports.createBlog = createBlog;
