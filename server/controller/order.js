import Joi from 'joi';
import Response from '../../assets/response';
import responseMessage from '../../assets/responseMessage';
import axios from 'axios';
import dotenv from "dotenv";
dotenv.config();

export class OrderController {
    async createOrder(req, res, next) {
        const validationSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }).unknown(true);
        try {
            const { email, password, ...restBody } = await validationSchema.validateAsync(req.body);
            const result = await axios.post(`https://${process.env.AUTHORIZATION_URL}?key=${process.env.AUTHORIZATION_KEY}`, {
                email, password, returnSecureToken: true
            });
            const {data: order} = await axios.post(`https://${process.env.FULFILLMENTTOOL_API_URL}/api/orders`, restBody, {
                headers: {
                    'Authorization': `Bearer ${result.data.idToken}`
                }
            });
            return res.json(new Response({ order }, responseMessage.ORDER_SUCCESS));
        }
        catch (error) {
            return next(error);
        }
    }

    async getOrderIDs(req, res, next) {
        const validationSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }).unknown(true);
        try {
            const { email, password } = await validationSchema.validateAsync(req.body);
            const result = await axios.post(`https://${process.env.AUTHORIZATION_URL}?key=${process.env.AUTHORIZATION_KEY}`, {
                email, password, returnSecureToken: true
            });
            const { data: orders } = await axios.get(`https://${process.env.FULFILLMENTTOOL_API_URL}/api/orders`, {
                headers: {
                    'Authorization': `Bearer ${result.data.idToken}`
                }
            });
            
            const orderIds = orders.orders.map(order => order.id);
            return res.json(new Response(orderIds, responseMessage.ORDER_FOUND));
        }
        catch (error) {
            return next(error);
        }
    }

    async getOrderByID(req, res, next) {
        const validationSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }).unknown(true);
        try {
            const { email, password } = await validationSchema.validateAsync(req.body);
            const result = await axios.post(`https://${process.env.AUTHORIZATION_URL}?key=${process.env.AUTHORIZATION_KEY}`, {
                email, password, returnSecureToken: true
            });
            const { data } = await axios.get(`https://${process.env.FULFILLMENTTOOL_API_URL}/api/orders/${req.params.id}`, {
                headers: {
                    'Authorization': `Bearer ${result.data.idToken}`
                }
            });
            return res.json(new Response(data, responseMessage.ORDER_FOUND));
        }
        catch (error) {
            return next(error);
        }
    }

    async cancelOrderByID(req, res, next) {
        const validationSchema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }).unknown(true);
        try {
            const { email, password } = await validationSchema.validateAsync(req.body);
            console.log(restBody);
            const result = await axios.post(`https://${process.env.AUTHORIZATION_URL}?key=${process.env.AUTHORIZATION_KEY}`, {
                email, password, returnSecureToken: true
            });
            const data = await axios.post(`https://${process.env.FULFILLMENTTOOL_API_URL}/api/orders/${req.params.id}/cancel`, {
                headers: {
                    'Authorization': `Bearer ${result.data.idToken}`
                }
            });

            return res.json(new Response(data, responseMessage.ORDER_CANCEL));
        }
        catch (error) {
            return next(error);
        }
    }
}

export default new OrderController();