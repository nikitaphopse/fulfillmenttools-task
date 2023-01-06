export default class ErrorHandler {
	constructor() {}

	unhandledRequest() {
		return (req, res, next) => {
			if (!res.headersSent) {
				return res.status(501).json({
					message: 'Request is not handled',
					error: 'Not Implemented',
					statusCode: 501,
				});
			}
			return next();
		};
	}
}