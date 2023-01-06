import orderController from './controller/order';
export default function routes(app) {
	app.post('/', orderController.createOrder);
	return app;
}
