# Contacts Project

This contacts app allows us to maintain a list of contacts. Each of the contacts include further details like avatar pic, name as well as username. We can search, delete and add new contacts. This project was built along while I was learning React from Udacity. The concepts involved while building this project include rendering UI, state management, lifecycle events and react router. 

Funcionality to store the new contact and deleting the contact permanently using localStorage is yet to be developed.

The project is also hosted using GitHub pages at [React-Contacts-App](https://sitansusubudhi.github.io/React-Contacts-App/)

## Component Hierarchy

```
|- App
|- CreateContact # This component renders the '/create' page of the app.
|- ListContacts # This component renders the '/' page of the app.
```

## Backend Server

For this application, the backend server for this in-class project can be found [here](https://github.com/sitansusubudhi/reactnd-contacts-server). The library file [`ContactsAPI.js`](src/utils/ContactsAPI.js) contains the below methods to perform necessary operations on the backend:

* [`getAll`]
* [`create`]
* [`remove`]

The library file [`ImageInput.js`] is used to read and resize image files before submitting them to the server as data URLs. This is also used to show a preview of the image.

## View project locally

To view the project in your local machine:

* clone this repository using `git clone `
* install all project dependencies with `npm install`
* start the development server with `npm start`




