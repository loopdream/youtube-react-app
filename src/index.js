
import server from './server/server';

const { PORT = 8001 } = process.env;

server.listen(PORT, () => {
  console.log(`Express is listening on port http://localhost:${PORT}`);
});
