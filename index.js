// how to use mocks here?
const inquirer = require('inquirer')
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))
const { choices } = require('yargs')

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
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
            name: 'managerid',
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
            name: 'manageremail',
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
            name: 'manageroffice',
            message: "What is your team manager's office number?",
            validate: managerOfficeInput => {
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
            type: 'loop',
            name: 'employees',
            message: "Would you like to add another employee?",
            questions: [{
                type: 'list',
                name: 'options',
                message: 'Would type of employee woudl you like to add to your team?',
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'employeename',
                message: "What is your employee's name?"
            },
            {
                type: 'input',
                name: 'employeeid',
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
                name: 'manageremail',
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
                name: 'engineergithub',
                message: "What is your engineer's GitHub username?",
                validate: engineerGitHubInput => {
                    if (engineerGitHubInput) {
                        return true
                    }
                    else {
                        console.log("You must input your employee's information.")
                        return false
                    }
                },
                when: employees => employees.options=== 'Engineer'
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does your intern attend?",
                validate: schoolInput => {
                    if (schoolInput) {
                        return true
                    }
                    else {
                        console.log("You must input your employee's information.")
                        return false
                    }
                },
                when: employees => employees.options=== 'Intern' 
            }
            ]
        }
    ]).then(data=>{
        
    })
}

init()