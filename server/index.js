const express = require("express");
require("dotenv").config();
const cors=require('cors')
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB=require('./config/db')
const app = express();
connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
