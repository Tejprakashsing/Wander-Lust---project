const mongoose=require("mongoose");

const reviewSchema=mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true
    },
    content:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
})

const review=mongoose.model("review",reviewSchema);

module.exports=review;