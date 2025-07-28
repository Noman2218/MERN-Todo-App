const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://NomanHayat:ua7TOmg2eU4bkvKt@merntodo.ihdslsy.mongodb.net/")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

 app.use("/api/todos", todoRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
