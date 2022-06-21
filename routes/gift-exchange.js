const express = require("express")
const GiftExchange = require("../models/gift-exchange")
const { BadRequestError } = require("../utils/errors")

const router = express.Router()

router.post("/pairs", async (req, res, next)=>{
    try{
        if(req.body.names){
    res.status(200).json(GiftExchange.pairs(req.body.names))}
    else{
        next(new BadRequestError ("No key found in the request body"))
    }

}catch(err){
    next(err)
}

   
   
})

router.post("/traditional", async (req,res, next)=>{
    try{
        if(req.body.names){
      const result = GiftExchange.traditional(req.body.names)
        res.status(200).json(result)
        }else{
            next(new BadRequestError("No key found in the request body"))
        }
    } catch(err){
        next(err)
    }
    
})

module.exports = router