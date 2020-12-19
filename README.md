# Password generator application

## Purpose of application:
Employees can use this website to generate a random password based on criteria they’ve selected. This application will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## Description:
User Interface will have generate password button. On click of button user will be prompted to enter length of password. User can enter number between 8-128, anything else will be rejected. On click of Cancel button user will come out of application and can start again.

Once user enters valid password length, a prompt to choose character types for password will be shown. User will have 2 options, 
1: Combination of Lowercase, uppercase characters and numbers
2: Combination of Lowercase, uppercase characters, numbers and special characters (!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~)
User can enter 1 or 2, anything else will be rejected.
Once user enters valid length and character type option, application will generate random password satisfying user crieteria and will be displayed in the textarea provided in the user Interface.

## User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

## Acceptance Criteria
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

## Mock up
The following image shows the web application's appearance

<div>
    <img src="./assets/images/password.png" width="400px"/> 
</div>

## Built With
* HTML
* CSS
* JavaScript

## Website

https://anagha778.github.io/password-generator/

## Contribution
Anagha Pawar