function generateMarkdown(answers) {
  return `
# ${answers.title} 

## Description 

${answers.description} 

## Table of Contents 

${answers.contents} 

## Installation 

${answers.installation} 

## Usage 

${answers.usage} 

## License 

${answers.license} 

## Contributing 

${answers.contributing} 

## Testing 

${answers.tests}
`;
}

module.exports = generateMarkdown;