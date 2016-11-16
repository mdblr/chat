const app = require('express')();
const server = require('http').Server(app);
const chat = require('./socket.conf')(server);
const bodyParser = require('body-parser');
const users = require('./routes/users');
const port = process.env.PORT || 9090;

server.listen(port);
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/src/index.html`);
});

app.use('/users', users);

chat();
