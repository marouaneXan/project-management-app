const express = require("express");
require("dotenv").config();
const { graphQlHTTP } = require("express-graphql");
const schema =require('./schema/schema')
const app = express();

const PORT = process.env.PORT || 5000;

app.use('/graphql',graphQlHTTP({
    schema,
    graphiql:process.env.NODE_ENV==='development',
}))



app.listen(PORT, () => console.log("Server running..."));
