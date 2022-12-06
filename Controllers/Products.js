const testing = (req,res) => {
    return res.status(200).send("All Working Fine");
}

const getallproducts = (req,res) => {
    return res.status(200).send("Get all products");
}


module.exports = {testing,getallproducts}