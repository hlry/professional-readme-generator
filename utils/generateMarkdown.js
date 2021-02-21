// global definitions
// fetch license badge info from shields.io and associate with licenses options when available
const licenseInfo = [
  {
    name: 'Apache License 2.0',
    badge: "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    link: "https://opensource.org/licenses/Apache-2.0)",
  },
  {
    name: 'Boost Software License',
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/BSL-1.0",
  },
  {
    name: 'GPL v3',
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  },
  {
    name: 'MIT License',
    badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    link: 'https://opensource.org/licenses/MIT',
  },
  {
    name: 'Mozilla Public License',
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    link: "https://opensource.org/licenses/MPL-2.0)",
  },
  {
    name: 'The Unlicense',
    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
    link: "https://opensource.org/licenses/unlicense",
  },
];


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const selectedLicenseArray = licenseInfo.filter(item => item.name === license);
  return selectedLicenseArray[0].badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const selectedLicenseArray = licenseInfo.filter(item => item.name === license);
  return selectedLicenseArray[0].link;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${license}`;
  } else {
    return "";
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}

# ${data.title}

## Table of Contents
* [Description](#Description)
* [Features](#Features)
* [Installation](#Installation)
* [Usage](#Usage)
* [Tests](#Tests)
* [LICENSE](#LICENSE)
* [CONTRIBUTING](#CONTRIBUTING)
* [Collaborators](#Collaborators)
* [Questions](#Questions)

## Description
${data.description}

## Features
${data.features}

## Installation
Clone this project to your local machine.

## Usage
Run the following command in your Command Line Interface:
${data.usage}

See CLI command being run in Terminal at the bottom of VSCode
![Screenshot of VSCode with Terminal at Bottom]
(./assets/ReadmeScreenshot.png)

## Tests
${data.tests}

## LICENSE
This repository is licensed under the '${renderLicenseSection(data.license)}' license.
Refer to ${renderLicenseLink(data.license)} for complete license terms.

## CONTRIBUTING
${data.contributing}

## Credits
Significant collaborators to this project are (or will be) listed here:
${data.collaborators}

## Questions

If you have questions contact me
GitHub: [${data.githubauthor}](https://github.com/${data.githubauthor})

`;
}

module.exports = generateMarkdown;
