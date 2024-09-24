# **Simple calculator**

1. ### **Task** (https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit).

This project implements functions such as addition, subtraction, multiplication, division, sign change and percentage.
Theme management has also been implemented.

2. ### **How to run the app.**

* In the project directory, you can run:

##### **npm start**

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

* To set up a production build, run the command:

##### **npm run build**

Link to application deployment (https://soneyk0.github.io/simple_calculator/)

3. ### **Description of the application structure.**

simple calculator
- src
  - function (Folder for functional components,all JS type files)
      - calculate.js (Function to perform calculations, type JS)
      - change_of_sign.js (Function to handle sign change, type JS)
      - division.js (Division function, type JS)
      - multiplication.js (Multiplication function, type JS)
      - percent.js (Calculating percentages of a number, type JS)
      - subtraction.js (Subtraction function, type JS)
      - sum.js (Addition function, type JS)
  - operations (Folder that contains a function that uses mathematical operators, all JS type files)
      - operations.js (Handling various mathematical operations, type JS)
  - theme (Folder for files related to theme management, all JS type files)
      - theme.js (Function that controls theme management,type JS)
  - index.html (Main HTML file for the application, type HTML)
  - index.js (Entry point for the application, type JS)
  - styles.css (Stylesheet for the application, type CSS)
