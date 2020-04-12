// Modules to be used
var inquirer = require('inquirer'); 
var fs = require('fs'); 
var axios = require('axios'); 
var ghApi = require ('./utils/api.js'); 
var gnr8MD = require ('./utils/generateMarkdown.js')

// Prompt/questions and answers to be used for the GitHub API call(s) and populate readme.md
inquirer
  .prompt([
    {
        type: "input",
        message: "Please enter your GitHub username:",
        name: "username"
      }, 
      {
        type: "input",
        message: "What is the title of your project:",
        name: "title"
      }, 
      {
        type: "editor",
        message: "Please provide a brief description of your project:",
        name: "description"
      },  
      {
        type: "editor",
        message: "Please provide a table of contents for your project:",
        name: "contents"
      },  
      {
        type: "editor",
        message: "What steps are required to install your project:",
        name: "installation"
      },   
      {
        type: "editor",
        message: "What would be some uses for your project:",
        name: "usage"
      },   
      {
        type: "input",
        message: "How is your project licensed:",
        name: "license"
      },   
      {
        type: "input",
        message: "Who contributed to your project:",
        name: "contributing"
      },  
      {
        type: "input",
        message: "Which, if any, tests were run on your project:",
        name: "tests"
      },   
  ])

  .then(answers => {
    //console.log(answers)
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });


