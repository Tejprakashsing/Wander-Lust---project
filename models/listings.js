const mongoose=require("mongoose");
const review=require("./review.js")
const MONGO_LINK="mongodb://127.0.0.1:27017/wanderLust"

async function main(){
    await mongoose.connect(MONGO_LINK);
}

main().then(()=>{console.log("DB connected")});

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        url:String,
        filename:String,
    },
    price: Number,
    location: String,
    country: String,
    reviews:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"review",
    }],
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
});


listingSchema.post('findOneAndDelete', async function(listing) {
    await review.deleteMany({_id:{$in:listing.reviews}});
});


const listing=mongoose.model("listing",listingSchema);
module.exports=listing;