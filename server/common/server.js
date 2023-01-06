import Express from "express";
import * as http from "http";
import cors from "cors";
import helmet from "helmet";
import ErrorHandler from "../helper/errorHandler";
import apiErrorHandler from "../helper/apiErrorHandler";
const app = new Express();

class ExpressServer {
	constructor() {
		app.use(Express.json());
		app.use(Express.urlencoded({
			extended: true
		}))

		app.use(helmet.contentSecurityPolicy());

		app.use(
			cors({
				allowedHeaders: ["Content-Type", "token", "authorization"],
				exposedHeaders: ["token", "authorization"],
				origin: "*",
				methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
				preflightContinue: false,
			})
		);
	}
	router(routes) {
		routes(app);
		return this;
	}

	handleError() {
		return new Promise((resolve, reject) => {
			const errorHandler = new ErrorHandler();
			app.use(apiErrorHandler);
			app.use(errorHandler.unhandledRequest());
			return resolve(this);
		});
	}

	listen(port) {
		http.createServer(app).listen(port, () => {
			console.log(`App is listening at port ${port}`);
		});
		return app;
	}
}

export default ExpressServer;
