
# Trackify

Deployment Link: ---provide link------

## Table of Contents

-   [Project Description](#project-description)
-   [Objectives](#objectives)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Environment Variables](#environment-variables)
-   [Run Locally](#run-locally)
-   [Tech Stack](#tech-stack)
-   [Screenshots](#screenshots)

## Project Description
> Trackify is a secure web application built to streamline issue management, allowing users to submit tickets for their concerns, assign them to the appropriate person for resolution, oversee all tickets in a centralized location, and analyze the entire ticket database for insights

## Objectives

> -   Ensure a robust, secure, and user-friendly authentication system for access over public networks.
> -   Provide a safe platform for users to monitor and manage the status of their daily tickets or issues.

## Features

> #### User Authentication
>
> -   Email based login for register and login.
> -   Notifying user about invalid login attempt   

> #### Ticket Creation Dashboard
> -   Allow users to create tickets and assign them to the appropriate team.
> -   Send an email notification to the assigned team member upon ticket assignment.
> -   Once the debugging team resolves the ticket, notify the user via email about the ticket status update.

> #### Ticket View Dashboard
> -   Display a visual dashboard that provides an overview of ticket statuses.
> -   Include filters to show how many tickets are resolved, in progress, and still open.

## Technologies Used

> #### Backend
>
> -   Utilized Node.js and Express.js to build REST APIs serving as the application's backend.
> -   Integrated the Nodemailer library to send emails for ticket creation notifications to users and resolution assignments to the responsible team.
> -   Performed testing with Postman to ensure optimal performance and reliability.

> #### Frontend
>
> -   Leveraged Bootstrap4.6 & html/css to desgin a seamless user interface for enhanced user experience.
> -   Enhanced user convenience by eliminating repeated logins using Local Storage, maintaining persistent login session.

> #### Database
>
> -   Stored all data, including user information and tickets/issue details in MongoDB, a NoSQL database.
> -   Utilized MongoDB Atlas, a cloud based database.

> #### Deployment
>
> -  Deployement on AWS Beanstalk
> -  TBD
>

## Environment Variables

To run this project, you will need to add the following environment variables & constants 

#### DB related environment variables

-   Open "constants/app_constants.js" and add your MongoDB URL, local or atlas, database name & collection name 
    

## Run Locally

Clone the project

```bash
  git clone https://github.com/falgunipatel30/Trackify.git
```

Go to the project directory

```bash
  cd Trackify
```

```bash
  npm install
```

Start the server

```bash
# This runs your app normally
 $ node app.js

# This runs your app in development mode using nodemon
 $ npm run dev

# Visit http://localhost:5000
```
## Tech Stack

**Client:** HTML/CSS, Bootstrap

**Server:** Node.js, Express.js

**Database:** MongoDB Atlas

**Testing:** Postman


## Screenshots

### Registration

-   Entry Page

    ![Entry Page](./screenshots/Entry_page.png)

-   Email - Register with Email & password 

    ![Email - Register OTP](./screenshots/Registration.png)

### Login
-   Login 

    ![Register - Set Password](./screenshots/login_page.png)

### HomePage
-   Home Page - View mode

    ![Home Page](./screenshots/main_dashboard_page.png)
    
### Raise Ticket
-   Ticket window

    ![Ticket Window](./screenshots/ticket_window.png)

-   Raise/Create Ticket Domain wise

    ![Raise/Create Ticket](./screenshots/raise_ticket_domainwise.png)

-   Order Placed/Ticket Raised

    ![Order Placed](./screenshots/ticket_raised.png)

### Display Tickets
-   Display Tickets with status

    ![Display Tickets](./screenshots/ticket_analysis.png)



