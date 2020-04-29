const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let arrteam = [];
function promptEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?"
        }, {
            type: "input",
            name: "name",
            message: "What is the employee name?"
        }, {
            type: "input",
            name: "email",
            message: "What is the employee email?"
        }, {
            type: "input",
            name: "Github",
            message: "What is the employee Github page?"
        }
    ]).then(function(ans) {
        arrteam.push(new Engineer(ans.name,ans.id,ans.email,ans.Github));
        promptNew();
    })
}
function promptIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?"
        }, {
            type: "input",
            name: "name",
            message: "What is the employee name?"
        }, {
            type: "input",
            name: "email",
            message: "What is the employee email?"
        }, {
            type: "input",
            name: "School",
            message: "What school does the intern go to?"
        }
    ]).then(function(ans) {
        arrteam.push(new Intern(ans.name,ans.id,ans.email,ans.School));
        promptNew();
    });
}
function promptManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What is the employee ID?"
        }, {
            type: "input",
            name: "name",
            message: "What is the employee name?"
        }, {
            type: "input",
            name: "email",
            message: "What is the employee email?"
        }, {
            type: "input",
            name: "OfficeNumber",
            message: "What is the manager's office number?"
        }
    ]).then(function(ans) {
        arrteam.push(new Manager(ans.name,ans.id,ans.email,ans.officeNumber));
        promptNew();
    });
}
function promptNew() {
    inquirer.prompt([{
        name: "name",
        type: "list",
        message: "Add new employee?",
        choices: [
            "Engineer",
            "Intern",
            "Manager",
            "No Thanks, I'm Done."
        ]
    }]).then(function(answer) {
        if (answer.name === "Engineer") {
            promptEngineer();
        } else if (answer.name === "Intern") {
            promptIntern();
        } else if (answer.name === "Manager") {
            promptManager();
        } else if (answer.name === "No Thanks, I'm Done.") {
            //ends successfully, now make html template
            fs.writeFileSync(outputPath, render(arrteam), "utf-8");
           
        } else {
            console.log("Something Went Wrong");
        }
    });
}
promptNew();