exports.getAllProducts = (req, res) => {
    console.log("getAllProducts function");
    res.status(200).json({ message: "Route is working fine" });
}
