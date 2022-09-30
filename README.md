# Random Password Generator Project

# Authors
Allen Klein
- [Link to Password Generator Site](https://allen-ek.github.io/password-generator/)
- [Link to Github Repository](https://github.com/allen-ek/password-generator)

## Why?
I wanted to be able to create a dynamic password generator webpage allowing for users to input different choices prompted by the webpage. That would allow for the user to determine password size and wether or not to contain uppercase,lowercase, numbers and special characters. 
## What I learned
I learned various javascript methods such as prompt,Math,and alert methods that allowed for dynamic functionality to an HTML webpage with CSS styling. I also learned how to create,modify and iteriate through arrays in javascript. I also learned how to interact with the user using a webpage and allow for interaction with the user in order to generate a password with user selection criterias. This site was also deployed to a live Github page.

## Technologies Used
HTML
JavaScript
CSS
Github
## Code Snippet
```html
var passSize= prompt("Enter how long you want the password from 8 to 128 characters");
  //checks to see if inputted password size is allowed
  while (passSize<8 || passSize>128){
    alert("Incorrect size selection please pick between 8 to 128 characters");
    passSize= prompt("Enter how long you want the password from 8 to 128 characters");
  }
```
This code snippet showcases usage of the prompt and alert methods in javascript to interact with the user as well as validating user inputs. This allows for notfication of how the password will be generated as well as error checking if the user mistypes.
## Screenshot of project webpage
![Site](Screenshot.png)



