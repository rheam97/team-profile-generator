// how to use mocks here?
const inquirer = require('inquirer')
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const generatePage = require('./src/template')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const { choices } = require('yargs')

const teamArray = []

const addEmployee= () => {

}

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
            validate: managerInput => {
                if (managerInput) {
                    return true
                }
                else {
                    console.log("You must input your manager's information.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employeeid?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true
                }
                else {
                    console.log("You must input your manager's information.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true
                }
                else {
                    console.log("You must input your manager's information.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is your team manager's office number?",
            validate: managerOfficeInput => {
                //must be number
                if (managerOfficeInput) {
                    return true
                }
                else {
                    console.log("You must input your manager's information.")
                    return false
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another employee?',
            default: true, // if yes, then return list
        }]).then(managerData=> {
            const [{name}, {id}, {email}, {office}] = managerData
            const manager =new Manager(name,id, email, office)
            teamArray.push(manager)
            if(managerData.confirmAdd){
              // make list and launch prompt
              //prompt will ask again
              // if no, end loop
              // if yes, start again
              addEmployee()
            }
            else {
                return teamArray
                //write file

            }
        })
}// separate team loop list into different inquirer prompt
// if yes data.employees.options and then launch other prompts
// array = [{engineer}, {manager}, {engineer}, {intern}]
// const engineer = new Engineer(name, id, email, github)
//add variables to team array 
//if they answer no, then i make these files
// if yes, restart prompts
// put data into page html
//write page html file
//copy to dist






addManager()
.then(addEmployee)
.then(teamArray => {
    return generatePage(teamArray)
}).then(//html, write html)
