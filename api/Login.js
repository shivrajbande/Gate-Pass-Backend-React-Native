const Details = require('../models/Login');
const express = require('express');
const app = express();




app.post("/Login",(req,res)=>{
   
    const [Name,Passowrd] = req.body;
    const login = new Details({
         Name,
         Passowrd,
    })

    login.save();
    res.json({
        Status:"Data Added to the DB!!"
    })
})
module.exports = app;



