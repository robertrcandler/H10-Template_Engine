const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//create an array called arrteam to put all employees in
const arrteam = [];
//create functions with prompts for all employee types
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
        arrteam.push(new Engineer(ans.id,ans.name,ans.email,ans.Github));
        return arrteam();
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
        arrteam.push(new Intern(ans.id,ans.name,ans.email,ans.School));
        return arrteam();
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
        arrteam.push(new Manager(ans.id,ans.name,ans.email,ans.OfficeNumber));
        return arrteam();
    });
}

//create function to prompt user for a new employee, then use employee functions from above based on input
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
        } else {
            console.log("Something Went Wrong");
        }
    });
}
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
