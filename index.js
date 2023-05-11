// Import the required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown');

// Define an array of questions for the user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide the installation instructions for your project:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the usage information for your project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide the contribution guidelines for your project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide the test instructions for your project:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Provide your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Provide your email address:',
  },
];

// Define a function to initialize the application
function init() {
  // Prompt the user with the questions
  inquirer.prompt(questions).then((answers) => {
    // Generate the markdown from the user's answers
    const markdown = generateMarkdown(answers);
    // Write the markdown to a file named "README.md"
    fs.writeFile('README.md', markdown, (err) =>
      err ? console.error(err) : console.log('README.md created!')
    );
  });
}

// Call the init function to start the application
init();
