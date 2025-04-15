const express=require("express");
const router=express.Router({mergeParams:true});
const asyncWrap=require("../utils/asyncWrap.js");
const {reviewSchema}=require("../schema.js");
const review=require("../models/review.js");
const listings=require("../models/listings.js");
const {isLoggedIn}=require("../middlewares/isLoggedIn.js");
const expressError=require("../utils/expressError.js");

const reviewValidation=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        throw new expressError(400,error.message);
    }
    else{
        next();
    }
}

//review
router.post("/",isLoggedIn,reviewValidation,asyncWrap( async (req,res)=>{
    let newReview=new review(req.body.review)
    newReview.author=req.user;
    let {id}=req.params;
    let currListing=await listings.findById(id);
    currListing.reviews.push(newReview);
    await newReview.save();
    await currListing.save();
    res.redirect(`/listings/${id}`);
}))

router.delete("/:reviewId",isLoggedIn,asyncWrap( async(req,res)=>{
    let {id,reviewId}=req.params;
    let currReview=await review.findById(reviewId);
    if(req.user._id.equals(currReview.author._id)){
        await listings.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
        await review.deleteOne(currReview);
    }
    else{
        req.flash("faliure","Access Denied");
    }
    res.redirect(`/listings/${id}`);
}))

module.exports=router;