const server = require('./socket');

const port = process.env.PORT || 5001;

server.listen(port, () => console.log(`Socket is on ${port}!`))