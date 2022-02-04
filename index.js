const inquirer = require('inquirer')
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const { generatePage} = require('./src/template')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')


//empty team array so that file can be refreshed with new input
const teamArray = []
//first add manager
function addManager() {
    return inquirer.prompt([
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
            name: 'officeNumber',
            message: "What is your team manager's office number?",
            validate: managerOfficeInput => {
                //must be number
                if (isNaN(managerOfficeInput)) {
                    console.log("You must input your manager's information.")
                    return false
                }
                else {
                    return true
                }
            }
        },
    ]).then(managerData => { // create manager object with inputs and push to array
        const { name, id, email, officeNumber } = managerData
        const manager = new Manager(name, id, email, officeNumber)
        teamArray.push(manager)
    })
}
// then add employee by type 
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What kind of employee would you like to add?',
            choices: ['Intern', 'Engineer']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employee's name?",
            validate: employeeInput => {
                if (employeeInput) {
                    return true
                }
                else {
                    console.log("You must input your employee's information.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's employeeid?",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true
                }
                else {
                    console.log("You must input your employee's information.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email?",
            validate: employeeEmailInput => {
                if (employeeEmailInput) {
                    return true
                }
                else {
                    console.log("You must input your employee's information.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "What is your employee's GitHub?",
            when: data => data.role === 'Engineer',
            validate: engineerInput => {
                if (engineerInput) {
                    return true
                }
                else {
                    console.log("You must input your employee's information.")
                    return false
                }
            }

        },
        { // conditional iputs for intern or engineer
            type: 'input',
            name: 'school',
            message: "What school does your intern attend?",
            when: data => data.role === 'Intern',
            validate: schoolInput => {
                if (schoolInput) {
                    return true
                }
                else {
                    console.log("You must input your employee's information.")
                    return false
                }
            }

        },
        {
            type: 'confirm',
            name: 'another',
            message: 'Would you like to add another employee?',
            default: false
        }]).then(employeeData => {
            let newEmployee; // push employee objects into team array 
            const { role, name, id, email, gitHub, school, another } = employeeData
            if (role === 'Engineer') {
                newEmployee = new Engineer(name, id, email, gitHub)
            }
            else if (role === 'Intern') {
                newEmployee = new Intern(name, id, email, school)
            }
            teamArray.push(newEmployee)
            if(another){ // if another is wanted, restart
                return addEmployee(teamArray)
            }
            else{ // pass this into generatePage
                console.log(teamArray)
                return teamArray
            }
        })
}
//  user template from generatePage to write into dist
function writeFile(pageHTML) {
    fs.writeFile('./dist/team.html', pageHTML, err=> {
        if(err){
            console.log(err)
        }
        else{
            console.log('Team page created!')
        }
    })
}


addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generatePage(teamArray)
    }).then(pageHTML => {
        return writeFile(pageHTML)
    }).catch(err=> {
        console.log(err)
    })

