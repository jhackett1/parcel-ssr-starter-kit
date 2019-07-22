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

1. Routing and isomorphic data fetching pattern
2. Code splitting
3. Styling with styled-components
4. One-click deploys to Heroku
5. Dotenv and env config in build
6. Jest
7. eslint