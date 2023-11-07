require('dotenv').config();
const express = require("express");
const app = express();
const router = require("./routes/router")
const router2 = require("./routes/Router2")
const router3 = require("./routes/HODroutes")
const cors = require("cors");
const Db = require('./Modal/connection')
const uuid =  require('uuid')
const port = 7786;
const cookieParser = require('cookie-parser');
const authenticateHOD = require('./middleware/verifyHod')
app.use(express.json()); 
app.use(cors({origin: "http://localhost:3000", // Replace with your client-side application's origin
credentials: true,}));
app.use(router);
app.use(router2)
app.use(router3)
app.use(cookieParser());
app.use(authenticateHOD);


function localVariables(req, res, next){
    req.app.locals = {
        OTP : null,
        resetSession : false
    }
    next()
}
// app.get("/", (req, res) => {
//     res.send("server start")
// })



app.listen(port, () => {
    console.log(`server start at port no :${port}`)
})