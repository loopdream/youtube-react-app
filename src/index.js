import server from './server/server.app';

const { PORT = 8080 } = process.env;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));