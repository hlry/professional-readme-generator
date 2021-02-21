// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // PROJECT TITLE - required
    {
        type: 'input',
        name: 'title',
        message: 'What is the name if your project? (Required)',
        // Make sure user enters Project Title
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },

    // PROJECT DESCRIPTION - required
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',

        // Make sure user enters Project Description
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },

    // FEATURES - optional
    // Gather description of project features
    {
        type: 'input',
        name: 'features',
        message: 'Provide a description of your project features (optional)',
        // no validation because it's optional
    },

    // USAGE - Required
    {
        type: 'input',
        name: 'usage',
        message: "Tell users what CLI command to enter to run your project: (Required)",
        // Make sure user enters installation information
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please tell users how to run your project!');
                return false;
            }
        }
    },

    // TESTS - optional
    {
        type: 'input',
        name: 'tests',
        message: "Describe any tests that have been written to test this code: (optional)"
        // Optional entry so no validation
    },

    // LICENSE - required
    // Clarify applicable license for user's project
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license that applies to your project:',
        // Resource: https://opensource.google/docs/thirdparty/licenses/
        choices: [
            "Apache License 2.0",
            "Boost Software License",
            "GPL v3",
            "MIT License",
            "Mozilla Public License",
            "The Unlicense",
        ]
    },

    // CONTRIBUTING
    // Optional - ask user if they wish to enter contributing instructions
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to tell users how they can contribute to your project?',
        default: true
    },
    // If so, gather contribution instructions
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide information about how contributors may contribute:',
        when: ({ confirmContributing }) => {
            if (confirmContributing) {
                return true;
            } else {
                return false;
            }
        }
    },

    // Credits - optional
    // Ask user if there are other collaborators they would like to credit
    {
        type: 'confirm',
        name: 'confirmCollaborators',
        message: 'Would you like to credit any other collaborators?',
        default: true
    },
    // If so, gather contributor usernames
    {
        type: 'input',
        name: 'collaborators',
        message: 'Provide GitHub usernames of other collaborators:',
        when: ({ confirmCollaborators }) => {
            if (confirmCollaborators) {
                return true;
            } else {
                return false;
            }
        }
    },

    // AUTHOR USERNAME - required
    {
        type: 'input',
        name: 'githubauthor',
        message: 'Enter your GitHub Username (Required)',
        validate: githubauthorInput => {
            if (githubauthorInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        } else
            console.log("Success! README.md file was created!");
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('./output/README.md', readmeContent);
        })
        .catch(err => {
            console.log(err);
        });
}

// Function call to initialize app
init();
