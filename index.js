import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

let newItems = [];

app.get("/" , (req , res) =>{
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    let day = today.toLocaleDateString("en-US", options);
    res.render("index.ejs" , {kindOfDay:day , newListItem: newItems});
   
});

app.post("/" , (req ,res) =>{
   let  newItem = req.body.newItem;
   newItems.push(newItem); 
    res.redirect("/");
});



app.listen(port , () =>{
    console.log(`the server is running on port ${port}`);
});