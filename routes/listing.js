const express=require("express");
const listings=require("../models/listings.js");
const router=express.Router({mergeParams:true});
const asyncWrap=require("../utils/asyncWrap.js");
const {listingSchema}=require("../schema.js");
const {isLoggedIn,isOwner}=require("../middlewares/isLoggedIn.js");
const expressError=require("../utils/expressError.js");
const cloudinary=require("cloudinary");

const { storage } = require('../cloudConfig.js'); 
const multer = require('multer');
const upload = multer({ storage });

const listingValidation=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        throw new expressError(400,error.message);
    }
    else{
        next();
    }
}

//index route
router.get("/",asyncWrap(async (req,res)=>{
    const allListings=await listings.find({});
    res.render("listings/index.ejs",{allListings});
}))

// create
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/create.ejs");
})

const deleteFromCloud=async (publicId)=>{
    cloudinary.upload.destroy(publicId).then(console.log("image deleted"));
}

router.post("/",isLoggedIn, upload.single('listing[image]'),listingValidation,asyncWrap(async(req,res)=>{
    let url=req.file.path;
    let fileName=req.file.filename;
    let newListing=new listings(req.body.listing);
    newListing.owner=req.user._id;
    newListing.image={url,fileName};
    await newListing.save();
    req.flash("success","New listing added");
    res.redirect("/listings");
}))

//show
router.get("/:id",asyncWrap(async (req,res)=>{
    let listing=await listings.findById(req.params.id).populate({path:"reviews",populate:{path:"author"}}).populate("owner");
    if(!listing){
        req.flash("faliure","Listing not found");
        res.redirect("/listings");
    }
    else{
        res.render("listings/show.ejs",{listing})
    }
}))

//edit
router.put("/:id",isLoggedIn,isOwner,upload.single('image'),asyncWrap(async (req,res)=>{
    let id=req.params.id;
    let url=req.file.path;
    let fileName=req.file.filename;
    let listing=await listings.findByIdAndUpdate(id,{...req.body});
    listing.image={url,fileName};
    await listing.save();
    req.flash("success","Listing edited successfully!");
    res.redirect(`/listings/${id}`);
}))

router.get("/:id/edit",isLoggedIn,isOwner,asyncWrap(async (req,res)=>{
    let listing=await listings.findById(req.params.id);
    if(!listing){
        req.flash("faliure","Listing not found");
        res.redirect("/listings")
    }
    else{
        res.render("listings/update.ejs",{listing});
    }
}))

router.delete("/:id",asyncWrap(async (req,res)=>{
    let id=req.params.id;
    await listings.findOneAndDelete({_id:id});
    req.flash("success","listing deleted successsfully");
    res.redirect("/listings");
}))

module.exports=router;