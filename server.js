// required constants 
const inquirer = require("inquirer");
const mysql = require("mysql");
const express = require("express");
const table = require("console.table");


// the sql connecting to local host
const connection = mysql.createConnection({
    host: 'localhost',







    // the port
    port: 3306

// usersname
user: "root",
    // password
    password: "password",
    database: "employees",
});
// end of connection function
