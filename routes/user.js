const express=require("express");
const router=express.Router({mergeParams:true});
const user=require("../models/user.js");
const asyncWrap=require("../utils/asyncWrap.js");
const passport=require("passport");
const {redirectUrl}=require("../middlewares/isLoggedIn.js");
const e = require("connect-flash");

router.get("/signup",(req,res)=>{
    res.render("user/signUp.ejs");
})

router.post("/signup",asyncWrap( async(req,res)=>{
    try{
        let{username,password,email}=req.body;
        let newUser=new user({
            username,email,
        })
        let registeredUser=await user.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to WanderLust!");
            res.redirect("/listings");
        })
    }
    catch(e){
        req.flash("faliure","User already exists!");
        res.redirect("/signup");
    }
}))

//login
router.get("/login",(req,res)=>{
    res.render("user/login.ejs");
})

router.post("/login",redirectUrl,passport.authenticate("local",{faliureRedirect:"/login",faliureFlash:true}),(req,res)=>{
    req.flash("success","login Successfull");
    if(res.locals.redirectUrl){
        res.redirect(res.locals.redirectUrl);
    }
    else{
        res.redirect("/listings");
    }
})

router.get("/logout",(req,res)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }
        res.redirect("/listings")
    })
})

module.exports=router;