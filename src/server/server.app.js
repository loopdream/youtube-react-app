import server from './server';

const { PORT = 8080 } = process.env;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));