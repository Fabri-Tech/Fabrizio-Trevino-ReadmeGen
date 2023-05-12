// Define a function to generate the markdown from the user's answers
function generatemarkdown(data) {
  // Define the license badge based on the user's choice
  let licenseBadge;
  switch (data.license) {
    case 'MIT':
      licenseBadge =
        '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache':
      licenseBadge =
        '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GPL':
      licenseBadge =
        '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD':
      licenseBadge =
        '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    default:
      licenseBadge = '';
  }

  // Define the contents of the README file
  return `# ${data.title}
  
  ${licenseBadge}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  https://github.com/Fabri-Tech
  If you have any questions, please feel free to contact me:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generatemarkdown;
