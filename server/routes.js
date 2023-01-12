import orderController from './controller/order';
export default function routes(app) {
	app.post('/', orderController.createOrder);
	app.get('/', orderController.getOrderIDs);
	app.get('/:id', orderController.getOrderByID);
	app.post('/:id/cancel', orderController.cancelOrderByID);
	return app;
}
