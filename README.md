# Self Care Center - Solo Challenge

## Deploy link
https://jrmedina.github.io/self-care-center/

## Overview
This Solo Challenge gives students and instructors the opportunity to get a pulse on where you are with the foundational concepts of Module 1 curriculum. Students should use this as an opportunity to challenge themselves and work completely independently. Google can (and probably should!) be used, but any other code base should not be referenced. Instructors will be able to use your work, both completion of functionality and code quality, to determine where you stand and if you are behind for this point in the module, provide supports to intervene.

Walkthrough:

https://user-images.githubusercontent.com/102757890/170890994-b484997a-fea4-424f-a917-f75c08c34317.mp4

Home view:
<img width="1440" alt="home" src="https://user-images.githubusercontent.com/102757890/170891078-23c5f18b-b6ae-4981-93c4-5a215bacb187.png">



- When a user selects a message option and then clicks the “Receive Message” button, the user sees a random message from the list of possible messages for that category

- When the message appears, the mediation icon disappears from the message area

<img width="1440" alt="message" src="https://user-images.githubusercontent.com/102757890/170891136-b5386b07-02bf-46d2-9ed2-6fe9fe03c31a.png">


## CYOA - Error handling and clear button

- User should not be able to click the “Receive Message” button unless they have selected a message option.

<img width="1440" alt="no-selection" src="https://user-images.githubusercontent.com/102757890/170891180-64e6ef8f-d898-4b2e-98a9-f0e23842aa57.png">


- The user can click a clear button, which clears the page of any message.

- User should only be able to click the clear button if a message is visible.

<img width="1440" alt="message" src="https://user-images.githubusercontent.com/102757890/170891136-b5386b07-02bf-46d2-9ed2-6fe9fe03c31a.png">

- When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
- If you’ve added other buttons or inputs, be sure to add some error handling for them as well.

<img width="1440" alt="clear" src="https://user-images.githubusercontent.com/102757890/170891210-15a33285-a3c4-41cc-8b06-95a65946adad.png">


## Technologies Used

-   JavaScript
-   HTML
-   CSS

## Setup

1. Fork the repository https://github.com/jrmedina/self-care-center
2. Clone the repository to your local machine
3. `cd` into the project
4. Open it in your text editor of choice
5. View the project in the browser by running open index.html in your terminal
