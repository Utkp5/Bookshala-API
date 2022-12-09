const mongooose = require('mongoose')

const productSchema = new mongooose.Schema({
    Title:{
        type:String,
        require:true,
    },
    Author:{
        type:String,
        require:true,
    },
    Genres:{
        type:String,
        require:true,
    },
    Language:{
        type:String,
        require:true,
    },
    Rating:{
        type:Number,
        require:true,
    },
    Type:{     //hardcover or paperback
        type:String,
        require:true,
    },
    createdAt: {
        type: Date,
        default:Date.now(),
    },

})


module.exports = mongooose.model("Product",productSchema);