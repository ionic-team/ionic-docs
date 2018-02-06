const express = require('express');
const stencil = require('@stencil/core/server');

// create the express app
const app = express();

// set which port express it will be using
const port = 3030;

// load the stencil config
const config = stencil.loadConfig(__dirname);

// serve-side render html pages
app.use(stencil.ssrPathRegex, stencil.ssrMiddleware({ config }));

// serve all static files from www directory
app.use(express.static(config.wwwDir));

// start the server
app.listen(port, () => config.logger.info(`server started at http://localhost:${ port }`));