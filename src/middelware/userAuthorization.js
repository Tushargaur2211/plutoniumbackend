// const jwt = require("jsonwebtoken")
// const authorModel= require("../models/authorModel")


// const authenticate =  function (req, res,next) {

//     try{
    
//         let token = req.headers["x-api-key"]
//         // if (!token) token = req.headers["x-api-key"];
    
//         if (!token) { res.status(404).send({ msg: "Token not found", status: false }) }
//         let decode = jwt.verify(token, "vishalTusharGhanshyamHunny")
            
    
//        if (!decode) { res.status(401).send({ msg: "invalid token", status: false }) }
    
//         //  res.send({ msg: "token matched" })
//          next()
//         }
    
    
//     catch(err){
//         // console.log(err.message)
//     }
//     }




// // -----------------//------------------------------------//

// const authorisation = async function(req,res,next){

//     let data = req.params.authorId
    

//     let token = req.headers["x-api-key"]
    

//     if (!token) {return res.status(404).send({ msg: "Token not found", status: false }) }
//     let decode = jwt.verify(token, "vishalTusharGhanshyamHunny")
        

//    if (!decode) {return  res.status(401).send({ msg: "invalid token", status: false }) }
//    let decodedId = decode.user
//     //  console.log()
//     // console.log(data,decodedId)
// // 401 unauthentication & 403 unauthorised
//    if(data!=decodedId){
//     return res.status(403).send({msg:"unauthorised user",status:false})
//    }else{
//     // res.send({msg:"authorised succesfully"}) 
//     next()
//    }
   
   
// }


// // ---------------//--------------------------//-----------------------------------//

// const getToken = async function(req,res,next){
// let data = req.body
// let emailId = data.email
// let pass = data.password



//  let check = await authorModel.findOne({email:emailId,password:pass})

// if(!check){return res.status(404).send({msg:"user not found",status:false})}
// let token = jwt.sign({user_id:check._id,
//                       project:"Mini-blog",  
//                       team: "60"
// },"vishalTusharGhanshyamHunny")

//   // res.send (setHeader("x-api-key", token)};
//  res.send({ status: true, data : token });
//  next()
// }

// module.exports.getToken = getToken
// module.exports.authorisation = authorisation
// module.exports.authenticate = authenticate


// ......................................///..................................//........................
const jwt = require("jsonwebtoken")
const authorModel = require("../models/authModels")
const BlogModel = require("../models/blogModel")
// const mongoose= require("mongoose")

const getToken = async function (req, res) {
    let data = req.body
    let emailId = data.email
    let pass = data.password
    
    if ((!emailId)|| (!pass)) {
        res.status(400).send({ msg: "email or password is missing", status: false })
    }

    let check = await authorModel.findOne({ email: emailId, password: pass })

    if (!check) { res.status(401).send({ msg: "Incorrect Id or password", status: false }) }
    let token = jwt.sign({
        user: check._id,
        project: "Mini-blog",
        team: "60"
    }, "vishalTusharGhanshyamHunny")

    let decode = jwt.verify(token, "vishalTusharGhanshyamHunny")
   
    
    res.status(200).send({ status: true, data: token,userId:decode});
    //res.setHeader("x-api-key", token);
}

// module.exports.getToken = getToken

//token validation

const authenticate =  function (req, res,next) {

try{
    
    let token = req.headers["x-api-key"]
    

    if (!token) { res.status(403).send({ msg: "Token not found", status: false }) }
    let decode = jwt.verify(token, "vishalTusharGhanshyamHunny")
   
    // if(!mongoose.Types.ObjectId.isValid(decode.user)){res.send({status:false,msg:"token format not matched"})}

   if (!decode) { res.status(403).send({ msg: "Invalid token", status: false }) }

   // res.send({ msg: "token matched" })
    next()
    }


catch(err){
    console.log(err.message)
    res.status().send({msg:err.message})
}
}


// module.exports.authenticate = authenticate

//authorisation for path params

const authorisation = async function(req,res,next){

    let token = req.headers["x-api-key"]
    if (!token) { res.status(401).send({ msg: "Token not found", status: false }) }
    let dataParams = req.params.auth
  
      let dP = await BlogModel.findOne({_id:dataParams})
       
    if(!dP){res.send({msg:"user not found"})}
    let test = dP.authorId

    let decode = jwt.verify(token, "vishalTusharGhanshyamHunny")
   
    if (!decode) { res.status(403).send({ msg: "invalid token", status: false }) }
    let decodedId = decode.user

    if(test!=decodedId)return res.status(403).send({msg:"unauthorised user",status:false})
      
   //return res.send({msg:"authorised"})
   next()

  
    
}

// module.exports.authorisation = authorisation


//authorisation for params query

let auth = async function(req,res,next){


    let dataQuery =req.query
    let dQ = await BlogModel.find({dataQuery}).select({authorId:1,_id:0})
    if(!dQ){res.status(403).send({msg:"not found",status:false})}

    let token = req.headers["x-api-key"]
    if (!token) { res.status(401).send({ msg: "Token not found", status: false }) }

    let decode = jwt.verify(token, "vishalTusharGhanshyamHunny")
   
    if (!decode) { res.status(403).send({ msg: "invalid token", status: false }) }
    let decodedId = decode.user

    for(let i=0;i<dQ.length;i++){
        if(dQ[i].authorId!=decodedId){return res.send({msg:"invalid"})}
    }
    
    next()
    
}

module.exports.auth = auth
module.exports.getToken = getToken
module.exports.authorisation = authorisation
 module.exports.authenticate = authenticate