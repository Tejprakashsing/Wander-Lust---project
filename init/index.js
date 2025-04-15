const mongoose=require("mongoose");
const data=require("./data.js")
const listing=require("../models/listings.js")


const initDB=async ()=>{
    await listing.deleteMany({});
    await listing.insertMany(data.data);
    console.log(data.data);
}

initDB();
