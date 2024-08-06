const express = require("express");
const app = express();

app.get("https://fakestoreapi.com/products", (req, res) => {
  res.json([
    {
      title: req.title,
      price: req.price,
      description: req.description,
      category: req.category,
      image: req.image,
    },
  ]);
});

app.listen(5000, () => {
  console.log("Server listening on http://localhost:5000");
});
