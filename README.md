# The CoLab

## Overview
A Github Community which allows users to shows what projects they are currently working on, which are available to collaborate. The app also provides the ability for users to search a feed of repositories to request the collaboration on other user's repositories.

##Technology
* React
* react-router
* semantic-ui-react
* JWT

##Functionality

When a user logs in or signs up, they are taken to their personal account, which shows their basic Github user information & eight most recent repositories.

A user has the ability to review the main repository feed, which shows a randomized list of repositories from all community users. A user can view the description of the repository as well as what the primary programming language used for the app. Users can "Request To Collaborate" on any/all projects they are interested in.

Users are able to view all requests that have been made to their repositories as well as the status of any request that they have made for another user's repository.

## User Authentication
User authentication and cookie storage through JSON Web Tokens (JWT)
Logs users in on page load if their localStorage has a valid token

## Layout/Design
The layout and design was created using Semantic's UI React library. I used their component templates for the modals, navbar, forms, buttons, inputs, and icons.
