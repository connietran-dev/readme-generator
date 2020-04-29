function generateMarkdown(userResponses, userInfo) {
  console.log("userResponses2", userResponses);
  console.log("userInfo2", userInfo);

  return `
  # ${userResponses.title}

  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  ### The what, why, and how: 
  
  ${userResponses.description}
  
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  
  
  ## Installation
  
  ### Steps required to install project and how to get the development environment running:
  
  ${userResponses.installation}
  
  
  ## Usage 
  
  ### Instructions and examples for use:
  
  ${userResponses.usage}
  
  
  ## Contributing
  
  ### If you would like to contribute it, you can follow these guidelines for how to do so.
  
  ${userResponses.contributing}
  

  ## Tests
  
  ### Tests for application and how to run them:
  
  ${userResponses.tests} 

  ## License
  
  ${userResponses.license}

  ---
  
  ## About @${userInfo.login}
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
 
  GitHub: [@${userInfo.login}](${userInfo.url})

  Email: ${userInfo.email}

  `;
  
}

module.exports = generateMarkdown;
