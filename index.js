const express = require("express");
const connect = require("./connect");
const Product = require("./Models/productschema");

const app = express();
connect();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello");
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
});

app.post("/products", async (req, res) => {
    const data = req.body;
    const newProduct = new Product(data);
    await newProduct.save();
    res.status(201).send({ message: "Product saved successfully", product: newProduct });
});

app.listen(3000, () => console.log("Server running on port 3000"));
