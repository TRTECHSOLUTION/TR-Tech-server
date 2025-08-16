const express = require('express')
const mongoose = require('mongoose')
const dotenv = require ('dotenv')

const app = express();
dotenv.config();
const port = 3000;


app.use(express.json());

mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((x) => {
        console.log("Connect to DB");
    })
    .catch((err) => {
        console.error("Error connecting to mongo", err);
    });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
