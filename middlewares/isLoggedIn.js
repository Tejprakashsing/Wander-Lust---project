const listings=require("../models/listings.js");
module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash("faliure","login Required")
        req.session.redirectUrl=req.headers.referer;
        return res.redirect("/login");
    }
    next();
};

module.exports.redirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner=async(req,res,next)=>{
    let id=req.params.id;
    let listing=await listings.findById(id);
    if(listing.owner.equals(req.user._id)){
        next();
    }
    else{
        req.flash("faliure","Access Denied!");
        res.redirect(`/listings/${id}`);
    }
}
