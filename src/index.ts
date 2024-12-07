import { AppServer } from './presentation/AppServer';

const PORT: number = Number(process.env.PORT) || 3000;

const appServer = new AppServer();
appServer.start(PORT);
