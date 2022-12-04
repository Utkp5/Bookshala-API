const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;





app.get("/" , (req,res) => {
    return res.send("ok ji dn")
})

const start = async () => {
    try {
        
        app.listen(PORT , () =>  {
            console.log(`Server started Successfully on PORT : ${PORT}`);
        })

    } catch (error) {
        console.log("error")
    }
}

start();