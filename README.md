
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
> -   
> #### Ticket View Dashboard
> -   Display a visual dashboard that provides an overview of ticket statuses.
> -   Include filters to show how many tickets are resolved, in progress, and still open.

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

