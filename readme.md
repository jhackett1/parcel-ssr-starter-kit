# React/Parcel SSR starter kit

A minimalist starter kit for server-rendered React applications.

This kit includes:

- `react`, for declarative, componentised UI
- `parcel`, for zero-configuration bundling
- `reach-router`, for routing with first-class accessibility features
- `styled-components`, because CSS has a place, but it's not in isomorphic React apps
- `react-helmet` for managing changes to the document head, such as changing the title on route changes
- `dotenv`, to manage secrets and API keys in local dev with a `.env` file
- `isomorphic-unfetch`, for fetching data on the client or the server

## Commands

- `npm run dev` fires up a client-rendered development server, with hot module replacement.
- `npm run build` will place a production-ready build in the `/dist` directory
- `npm start` will run that build, assuming it exists

### A note on custom server logic

A warning that the standard dev mode does *not* fire up the express server, so any custom logic there (eg. static assets not handled through bundled imports, or API routes) won't be available.

This can be fixed by running `npm run dev:server` instead of `npm run dev`. It will fire up the server part of your app as well as the client part, and watch both for changes, *but* you will lose hot module replacement and will need to refresh the page to see changes.

If possible, the best approach is to make sure that static assets are handled appropriately by importing them, and mock out API responses.

## Deploying to the web

The app can be deployed to Heroku without any special considerations.

With minor changes the build command and `src/client/index.js`, it could also be deployed to a static host like Netlify, albeit without server-rendering support. This could be suitable for internal apps where SEO and bleeding-edge performance isn't as much of a concern.

## To do

1. Polyfill and confirm IE11 support, esp. for async/await
2. Set up reach-router and a pattern for loading initial data on the server
3. Set up styled components with a server-rendered 
4. Head management with helmet
5. Better solution than `npm run dev:server`?