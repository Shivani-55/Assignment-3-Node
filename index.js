//Create 2 get routes using express Router first to display sample products and 
//second to display sample users these routes should be protected and can only be 
//accessible by the admin and if a user who is not an admin is trying to access 
//that API shows a suitable error message, add a 404 error message if an API is 
//being called which has not been created.

const express = require("express");
const app = express();
const routes = require("./views/routes")
const port = 8080;

app.use(routes);

app.use("*", (req,res)=>{
    res.status(404).send("404 Not found")
})

app.listen(port , ()=>{
    console.log(`Server started running on port ${port} `);
})