const express= require("express");
const app = express();
const ejs = require("ejs");
app.use(express.json());

const path=require("path");
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");    
})
app.listen(8080, ()=>{
    console.log("Server is running on port 8080 http://localhost:8080");
});