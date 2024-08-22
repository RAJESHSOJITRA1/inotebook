
const mongoose=require('mongoose');
const mongoURI="mongodb://localhost:27017/";
const connectToMongo=async()=>{
    try{
        await mongoose.connect(mongoURI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log("Mongodb connected Succefully");
    }
    catch(error){
        console.log("error ocuured");
    }
}
module.exports=connectToMongo;


// const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017/";

// const connectToMongo=async()=>{
//     try{
//     await mongoose.connect(mongoURI,{
//         useNewUrlParser:true,
//             useUnifiedTopology:true,
//     })   ;
//     console.log("connected mongoose Succefully")
// } 
// catch(error){
//     console.log("error occured in the mongodb:" ,error)
// } 
// } ;
// module.exports=connectToMongo;