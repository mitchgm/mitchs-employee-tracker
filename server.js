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
connection.connect(function (error) {
    if (error) throw error;
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
                "Remove an Employee",
                "Update an Employee Role",
                "Add an Employee Role",
                "Exit",
            ],
        })


        .then(function ({ task }) {
            switch (task) {
                case "View The Employees":
                    employeeView();
                    break;
                // each case has an accompanying function/function break
                case "View The Departments":
                    departmentView();
                    break;
                case "Add an Employee":
                    employeeAdd();
                    break;
                case "Remove an Employee":
                    employeeRemoval();
                    break;
                case "Update an Employee Role":
                    employeeUpdate();
                    break;
                case "Add an Employee Role":
                    roleAdd();
                    break;
                case "Exit":
                    connection.exit();
                    break;
                // exit case
            }
        });
}
// end of starting prompt function

// use case functions

function employeeView() {
    const sql = "Select * from employees";
    db.query(sql, function (error, results) {
        if (error) throw error;
        console.table(results);
        promptSuccess();
    });

}
// end of employeeView function

function departmentView() {

}
// end of departmentView function


function employeeAdd() {

}
// end of employeeAdd function


function employeeRemoval() {

}
// end of employeeRemoval function


function employeeUpdate() {

}
// end of employeeUpdate function


function roleAdd() {

}
// end of roleAdd function


