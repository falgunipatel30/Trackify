
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
> -   Stored all data, including user information and transaction details in MongoDB, a NoSQL database.
> -   Utilized MongoDB Atlas, a cloud based database.

> #### Deployment
>
> - 



### Usage

```sh
$ npm install
```

```sh
$ npm start
# Or run with Nodemon
$ npm run dev

# Visit http://localhost:5000
```

### MongoDB

Open "config/keys.js" and add your MongoDB URI, local or Atlas

