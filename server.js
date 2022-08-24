

//===================
const { faker } = require("@faker-js/faker");
const User = require('./src/User.js');
const Company = require('./src/Company.js');
//===============
const express = require("express");
const app = express();
const port = 8000;
//POST Data
//In order to be able to access POST data, we need to be able to pull it out of the request object.
// To do this, we first have to add a new setting to our server.js file:
//both express.urlencoded() and express.json() are Express middleware functions.
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("hello");
});


const users=[
  {id:1,name:"bushra",age:24},
  {id:2,name:"sara",age:23},
  {id:3,name:"sumaya",age:24},
  {id:4,name:"farah",age:24}
]
app.get("/api/people/:id",(req,res)=>{

  const id =req.params.id;
  users.splice(id,1)

  res.json({ status: "ok" });

});


//==============================1==================
//Create an api route "/api/users/new" that returns a new user
app.get("/api/user/new", (req, res) => {
  res.json(new User());
});

//==============================2==================
//Create an api route "/api/companies/new" that returns a new company
app.get("/api/companies/new", (req, res) => {
  res.json(new Company());
});


//==============================3==================
//Create an api route "/api/user/company" that returns both a new user and a new company
app.get("/api/user/company", (req, res) => {
  const newUser= new User();
  const newCompany= new Company();

  res.json({newUser,newCompany});
});


const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
