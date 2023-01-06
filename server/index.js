import Routes from "./routes";
import Server from "./common/server";
import dotenv from "dotenv";
dotenv.config();

const server = new Server()
	.router(Routes)
	.handleError()
	.then((_server) => _server.listen(process.env.PORT));

export default server;
