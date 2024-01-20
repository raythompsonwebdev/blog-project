# Blog-Project

Node Project - Create Blog Website

# Description

Client and Server Web Application that allows users to create, read, update and delate blog post. Client built using React. Backend Built using Node & Express. Blog Information stored on PostgreSQL database

## Features

- User Login and Register (in progress)
- Create and Read functionality ( Update and Delete in progress)
- Responsive Design

## Tools

### Client

- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Sass](https://sass-lang.com/)
- [Prettier](https://prettier.io/)
- [Eslint](https://eslint.org/)
- [Postcss](https://postcss.org/)
- [Stylelint](https://stylelint.io/)
- [Flow-Bin](https://www.npmjs.com/package/flow-bin/)
- [Typescript](https://www.typescriptlang.org/)

### Server

- [Express](https://expressjs.com/)
- [Node](https://nodejs.org/en)
- [JWT Tokens](https://jwt.io/)
- [Cypress](https://www.cypress.io/)
- [PG](https://www.npmjs.com/package/pg/)
- [CORS](https://www.npmjs.com/package/cors/)
- [BodyParser](https://www.npmjs.com/package/body-parser)
- [CookieParser](https://www.npmjs.com/package/cookie-parser)
- [Babel](https://babeljs.io/)
- [Express-Rate-Limiter](https://www.npmjs.com/package/express-rate-limit)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [DotEnv](https://www.npmjs.com/package/dotenv)

### Database

- [PostgreSQL](https://www.postgresql.org/)

## Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Clone the repo

```sh
git clone git@github.com:raythompsonwebdev/shoestore.git
```

## Usage - Client

Install NPM packages :

```sh
npm install
```

### or

```sh
yarn install
```

### or

```sh
pnpm install
```

Once packages have been down loaded , To view website:

```sh
npm run start
```

Runs start to start website in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

Runs build to build the application for production usage

```sh
npm run build
```

Runs lint to lint styles and scripts files.

```sh
npm run lint
```

## Usage - Server

Set up a PostgreSQL Database to enable you to Create Read Update and Delete blog information : - [Installing and Using PostgreSQL Locally](https://www.codecademy.com/article/installing-and-using-postgresql-locally)

Set up Cypress : [Installing Cypress and writing your first test](https://learn.cypress.io/testing-your-first-application/installing-cypress-and-writing-your-first-test)

Install NPM packages :

```sh
npm install
```

### or

```sh
yarn install
```

### or

```sh
pnpm install
```

Once packages have been downloaded , to start client got to client folder :

```sh
npm run start
```

Runs start to start website in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

Runs lint to lint client application styles and scripts files , cd into client folder.

```sh
npm run lint
```

Run build to build the client application for production usage , cd into client folder

```sh
npm run build
```

To start development server, cd into server folder :

```sh
npm run dev
```

To start staging server , cd into server folder :

```sh
npm run start
```

To test if API calls from server are retrieving data from from the database,[Postman](https://www.postman.com/) is a great tool to use to test API calls.
