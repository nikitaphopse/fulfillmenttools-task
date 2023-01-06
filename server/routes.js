import orderController from './controller/order';
export default function routes(app) {

	app.post('/', orderController.createOrder);

	/*------------v1 routes--------------------*/

	// app.use("/v1/user", userV1)
	// app.use("/v1/admin", adminV1)
	// app.use("/v1/common", commonV1)

	return app;
}
