require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/router")
const cors = require("cors");




const port = 7786;

app.use(express.json()); //////////json k format me frontend se data
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
    res.send("server start")
})

app.listen(port, () => {
    console.log(`server start at port no :${port}`)
})