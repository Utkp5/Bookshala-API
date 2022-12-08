const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;


const productRoutes = require("./Routes/Products");
app.use("/api/products", productRoutes);
const dbconnect = require("./Service/Dbconfig");
dbconnect();

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