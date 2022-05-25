const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.listen(PORT, () =>{
    console.log(`Server is running 🏃 on ${PORT}`)
});


