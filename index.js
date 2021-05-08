// node modules
const inquirer = require('inquirer');
const emailValid = require("email-validator");
// for using fs 
const fs = require('fs');
// classes and subclasses
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// function for html
const generateHTML = require('./src/functions.js');

let team = [];

function emailCheck(input){
    if (emailValid.validate(input)){
        return true;
    }
    return 'You must enter a valid email address.';
};

function numberCheck(input){
    if(!isNaN(input)){
        return true;
    }
    return 'You must enter a valid number.';
};

function start() {inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your ID?',
        validate: numberCheck
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your e-mail?',
        validate: emailCheck
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your job title?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your office number?',
        validate: numberCheck,
        when: function(answers){
            return answers.title === 'Manager';
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter your GitHub username',
        when: function(answers){
            return answers.title === 'Engineer';
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What school are you attending?',
        when: function(answers) {
            return answers.title === 'Intern';
        }
    },
    {
        type: 'confirm',
        name: 'again',
        message: 'Enter another Employee?',
    }
])

    .then((answers) => {
        let newEmployee = createEmployee(answers);
        team.push(newEmployee);
        if (answers.again === true) {
            start();
        } else {
            let managerCheck = team.filter(emp => {return emp.getRole() === "Manager"});
            if (managerCheck[0]){
                console.log("Html rendering")
                const htmlPageContent = generateHTML(team);
                fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
                    err ? console.log(err) : console.log ('HTML created successfully')
                );
            } else {
                console.log('Error: you must include at least one manager.');
                start();
            }
        }
    });
};

function createEmployee(answers){
    let newEmployee;
    if (answers.title === 'Manager'){
        newEmployee = new Manager{answers.name, answers.id, answers.email, answers.officeNumber};
    } else if(answers.title === 'Engineer'){
        newEmployee = new Engineer{answers.name, answers.id, answers.email, answers.gitHub};
    } else if(answers.title === 'Intern'){
        newEmployee = new Intern{answers.name, answers.id, answers.email, answers.school};
    }

    return newEmployee;
};

// user is gonn run 'node index.js'

// inquirer will ask questions and user will create employee objects

// once user is done create a js file inside of dist that has an array of employee objects

// import the file with the array into the html before script.js

// use scripts.js to write dom manipulation and create card elements for the html
 

