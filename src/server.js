const express = require ('express');
const nunjucks = require ('nunjucks');
const server = express ();

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require ('./pages');


nunjucks.configure ('src/views', {
  express: server,
  noCache: true,
});


server.use (express.urlencoded ({ extended: true }));
server.use (express.static ('public'));

server.get ('/', pageLanding);
server.get ('/study', pageStudy);
server.get ('/give-classes', pageGiveClasses);

server.post ('/save-classes', saveClasses);

server.listen(5500);