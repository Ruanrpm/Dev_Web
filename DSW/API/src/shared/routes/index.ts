import {response, Router} from "express";
import productRouter from "./product.routes";

const routes = Router();
routes.use('/products', productRouter)

routes.get('/', (request, response) => {
    response.json({message: 'Hellow Dev!'});
    return;
})

export default routes;