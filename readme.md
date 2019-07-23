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

1. Routing (DONE)
2. isomorphic data fetching pattern
3. Code splitting
4. Styling with styled-components (DONE)
5. One-click deploys to Heroku
6. Dotenv and env config in build
7. Jest
8. eslint