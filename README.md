# Node.js and ES6+: README.md Generator

## Description 
  
*The what, why, and how:* 
  
For any good project, it is important to have a quality README with information about the app - what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. 

This is a command-line application that runs with NodeJS that dynamically generates a README.md based on your input about your project. Check out `ExampleREADME.md` in this repo as an example. 


## Table of Contents
* [Usage](#usage)
* [Installation](#installation)
* [License](#license)
  
## Usage 

*Instructions and examples for use:*

(GIF HERE)

When you run `node index.js` the application uses the `inquirer` package to prompt you in the command line with a series of questions about your GitHub and about your project.

The application then takes your responses and uses `axios` to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email.

From there, the application will generate markdown conditionally based on your responses to the Inquirer prompts. The README will also include badges for your GitHub repo.

Finally, `fs.writeFile` is used to generate your project's README.md file.

The application separates the GitHub API call and generation of the markdown into separate modules: `api.js` and `generateMarkdown.js` inside the `utils` folder, respectively.

The application also utilizes as much as possible, syntax and paradigms introduced in ES6 and beyond, including `arrow functions`, `const`, `let`, template literals, and `async/await` to handle the `inquirer`, `axios`, and `fs.writeFile` promises.

Check out `ExampleREADME.md` in this repo as an example. 


## Installation

*Steps required to install project and how to get the development environment running:*

To generate your own README, first run `npm install` in order to install the following npm package dependencies as specified in the `package.json`:
  * [`inquirer`](https://www.npmjs.com/package/inquirer) that will prompt you for your inputs from the command-line 
  * [`axios`](https://www.npmjs.com/package/axios) to fetch your info from GitHub

The application itself can be invoked with `node index.js`


## License

MIT License

---

## Questions?

![Developer Profile Picture](https://avatars3.githubusercontent.com/u/61371242?v=4) 

For any questions, please contact me via the information below:

GitHub: [@connietran-dev](https://api.github.com/users/connietran-dev)


Email: connietrandev@gmail.com