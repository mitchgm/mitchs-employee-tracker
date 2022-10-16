// required constants 
const inquirer = require("inquirer");
const mysql = require("mysql2");
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

// this fucntion will connect the sql databse and the mysql together 
connection.connect(function (err) {
    if (err) throw err;
    starterPro();
    // this will call the intial prompts
});

function starterPro() {
    inquirer
        .prompt({
            type: "list",
            name: "task",
            message: "Select a Task",
            choices: [
                "View The Employees",
                "View The Departments",
                "Add an Employee",
                "Remove an Employees",
                "Update an Employee Role",
                "Add an Employee Role",
                "Exit",
            ],
        })
}
