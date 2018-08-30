Application require installed `node.js` and `npm` or `yarn`

#Install
* Install client dependencies with `npm i`
* Install server dependencies with `cd server && npm i`

#Start
* Run server  with `node server/`

Server will listen on port 3000
* Run client in development mode with `npm start`

Open `http://localhost:4000` to view it in the browser.

  
#Build

* `npm run build`  - Builds the app for production to the build folder. The build folder is ready to be deployed.
The project was built assuming it is hosted at `the server root`.

* You may serve it with a static server: 
1) `npm install -g serve`
2) `serve -s build`
3) Open `http://localhost:5000` to view it in the browser.

