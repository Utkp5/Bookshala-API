const mongoose = require("mongoose");
const dbconnect = async () => {

    try {
        
        await mongoose.connect(process.env.MONGODB_URL,{
            useUnifiedTopology : true,
            useNewUrlParser : true,
        });

        console.log("Mongodb connected successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbconnect;