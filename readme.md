# Accessible by default React starter kit

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Folder structure

- `config`, webpack config lives here
- `src`
    - `server`, by default, the express.js server lives here. add controllers, models and routes to taste
    - `client`, logic for mounting and hydrating react on the client lives here
    - `shared`, react components live here

## Commands

- `npm run dev` to fire up a dev server with hot module replacement for react components (sever-side changes will need manual restarts)
- `npm run build` to build a production copy
- `npm start` to run a production build, if it exists

## To do

- ~routing~ (DONE)
- ~styling with styled-components~ (DONE)
- ~one-click deploys to Heroku~ (DONE)
- isomorphic data fetching pattern
- code splitting
- jest
- eslint
- dotenv and passsing env config into client bundle
- gzip compression