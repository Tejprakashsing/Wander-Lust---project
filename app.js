const express=require("express");
const app=express();
const path=require("path");
const method_override=require("method-override");
const ejsMate=require("ejs-mate");
const expressError=require("./utils/expressError.js");
const listingRoute=require("./routes/listing.js");
const reviewRouter=require("./routes/review.js");
const session=require("express-session");
const flash=require("connect-flash");
const passport=require("passport");
const passportLocal=require("passport-local");
const user=require("./models/user.js")
const userRouter=require("./routes/user.js")

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(method_override("_method"));
app.engine("ejs",ejsMate)
app.use(express.urlencoded({extended:true}));


app.use(session({
    secret:"firstSecret",
    resave:false,
    saveUninitialized:true,
}));
app.use(flash());

//passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new passportLocal(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.faliure=req.flash("faliure");
    res.locals.currUser=req.user;
    next();
})

//root route
app.get("/",(req,res)=>{
    res.send("helo! i am root");
})

//routers
app.use("/",userRouter);
app.use("/listings",listingRoute);
app.use("/listings/:id/reviews",reviewRouter);

//error handeling middlewares
app.all("*",(req,res,next)=>{
    next(new expressError(404,"page not found!"));
})

app.use((err,req,res,next)=>{
    let {status=500,message="somethig went Wrong"}=err; 
    res.status(status).render("./error.ejs",{message});
})

app.listen(8080,()=>{
    console.log("server is listening to port 8080")
})