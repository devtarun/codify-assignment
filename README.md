# Codify

Codify Assignment

## Installation

Use NPM package manager to install all the dependencies

```bash
npm install
cp .env.example .env
```

## Running

```bash
npm start
```
The server will start on port 3000. Additionally you can specify you own port in ```.env``` file.

## API Documentation
[Postman](https://documenter.getpostman.com/view/6483443/T17CC9T5)

## Architecture Diagram
### Folder Structure
```bash
src
|__ server.js       # App entry point
|__ app.js          # Contains logic for creating the express app
|__ controllers/    # Contains app logic for interacting with business logic
    |__ Agency.js   # Logic for Agencies
    |__ User.js     # Logic for Users
|__ middlewares/    # Middlewares for authentication
    |__ auth.js     # Authentication middleware using JWT token
|__ models/         # Contains models for interacting with the mongoose ORM
    |__ agency.js   # Mongoose ORM for Agencies
    |__ user.js     # Mongoose ORM for Users
|__ routes/         # Contains API routes
    |__ api.js      # Contains all the routes that app can handle
```