const mongoose =require("mongoose");

const productSchema=new mongoose.Schema({
    name :{
        type : String,
        required:[true , "Please Enter product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please provide product Description"] ,
    },
    price :{
        type : Number,
        required :[true , "Please Enter product Price"],
        maxLength:[8,"Price cannot exceed 8 Characters"]
    },
    rating :{
        type : Number,
        default:0
    },
    images:
    [
        {
            public_id :
            {
                type:String ,
                required:true
            },
            url:
            {
                type:String ,
                required:true
            },
        }
    ],
    category:
    {
        type:String ,
        required:[ true , "Please Enter product Category"],
    },
    stock:
    {
        type : Number,
        required:[true , "Please Enter proudct Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters "],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String ,
                required:true,
            },
            rating:{
                type:Number,
                required:true,

            },
            comment:{
                type:String,
                required:true,
            }
        }
    ],
    createdAt:
    {
        type:Date,
        default:Date.now
    }

})

//Notes  print what I am exporting from here
console.log("Printing value of mongoose.model('Product', productSchema) here start" );
console.log( mongoose.model("Product", productSchema) );
console.log("Printing value of mongoose.model('Product', productSchema) ends here ");


module.exports=mongoose.model("Product", productSchema);


