const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamMembers = [

]
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "phone",
            message: "What is your office number",
        },
        {
            type: "input",
            name: "id",
            message: "What is your id number",
        }

    ]).then(function (answers) {
        const manager = new Manager(answers.name, parseInt(answers.id), answers.email, parseInt(answers.phone));
        teamMembers.push(manager);
        addMember();
    });
}
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "members",
            message: "What team member do you want to add",
            choices: [
                "Engineer",
                "Intern",
                "I dont want to add anyone else"
            ]
        }
    ]).then(function (answer) {
        if (answer.members === "Engineer") {
            createEngineer();
        }
        else if (answer.members === "Intern") {
            createIntern();
        }
        else {
            fs.writeFile(outputPath, render(teamMembers), function (error) { if (error) throw error })
        }
    })
}
function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your github",
        },
        {
            type: "input",
            name: "id",
            message: "What is your id number",
        }

    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
        teamMembers.push(engineer);
        addMember();
    });
}
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is your school",
        },
        {
            type: "input",
            name: "id",
            message: "What is your id number",
        }

    ]).then(function (answers) {
        const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
        teamMembers.push(intern);
        addMember();
    });
}
createManager();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
