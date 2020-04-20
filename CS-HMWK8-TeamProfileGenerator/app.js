const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

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
// for the provided `render` function to work!```
const employeeArray = [] 
const teamCapacity = 6 

async function employeeInquire() {
  let employeeQuestions = 
  await inquirer.prompt ([
    {
    type: 'input', 
    name: 'name',
    message: "Please enter your name"
    }, 
    {
    type: 'input', 
    name: 'id',
    message: "Please enter your id number"
    },
    {
    type: 'input', 
    name: 'email',
    message: "PLease enter your email"
    }, 
    {
    type:'list',
    message: 'Please choose your role', 
    choices: ['Manager','Engineer','Intern'],
    name:'role' 
    }
  ]);  

  switch(employeeQuestions.role) {
    case "Manager":
      employeeQuestions = await managerInquire(employeeQuestions);
    break;
    case "Engineer":
      employeeQuestions = await engineerInquire(employeeQuestions);
    break;
    case "Intern":
      employeeQuestions = await internInquire(employeeQuestions);
    break; 
    default: 
    break;
  }
return employeeQuestions 
} 

  async function managerInquire(employeeQuestions) {
     let managerQuestions = 
     await inquirer.prompt ([
    {
      type:'input', 
      name: 'officeNumber',
      message:'Please enter your office number'
     }
    ]);

employeeQuestions.officeNumber = await managerQuestions.officeNumber; 

return employeeQuestions 
  }  

  async function engineerInquire(employeeQuestions) {
    let engineerQuestions = 
    await inquirer.prompt ([
    {
    type: 'input',
    name: 'github', 
    message: 'Please enter your GitHub username'
  }
]); 

employeeQuestions.github = await engineerQuestions.github;

return employeeQuestions
  }  

async function internInquire(employeeQuestions) {
  let internQuestions = 
  await inquirer.prompt ([
    {
    type: 'input',
    name: 'school',
    message: 'Please enter your school'
    }
  ]);
    
employeeQuestions.school = await internQuestions.school;

return employeeQuestions
}  

function createEmployee (employeeQuestions) {
  let employee; 
  const {name, id, email} = employeeQuestions;
  switch(employeeQuestions.role) {
    case "Manager":
      const manager = new Manager (name, id, email, employeeQuestions.officeNumber); 
      employee = manager; 
      break;
    case "Engineer":
      const engineer = new Engineer (name, id, email, employeeQuestions.github);
      employee = engineer; 
      break; 
    case "Intern": 
      const intern = new Intern (name, id,email, employeeQuestions.school); 
      employee = intern; 
      break;
    default:
      break;
} 
return employee
}

employeeInquire();

