// const { count } = require("console")
const { request } = require("http");
const BlogModel = require("../models/blogModel");

const createBlog = async function (req, res) {
    try{
        let data = req.body;
      
        let savedData = await BlogModel.create(data);
        res.status(201).send({ msg: savedData });
    }catch (err) {
        console.log("This is the error :", err.message)
        res.status(400).send({ msg: "Error", error: "invalid request" })
    }
};

// const createBook = async function (req, res) {
//     try {
//         let data = req.body
//         console.log(data)
//         if ( Object.keys(data).length != 0) {
//             let savedData = await BookModel.create(data)
//             res.status(201).send({ msg: savedData })
//         }
//         else res.status(400).send({ msg: "BAD REQUEST"})
//     }
//     catch (err) {
//         console.log("This is the error :", err.message)
//         res.status(500).send({ msg: "Error", error: err.message })
//     }


module.exports.createBlog = createBlog;
