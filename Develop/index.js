const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username'
        // validation 
      },
      {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
      },
      {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description'
      },
      {
        type: 'input',
        message: "Describe the steps required to install your project for the Installation section.",
        name: "installation"
      },
      {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
      },
      {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
      },
      {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
      },
];

function writeToFile(fileName, data) {
}

async function init() {
    await inquirer
        .prompt(questions)
        .then(response => {
            console.log(response);
            console.log("Thank you for your responses! Fetching your GitHub data next...");
        });

    await console.log('next');
    
}

init();
