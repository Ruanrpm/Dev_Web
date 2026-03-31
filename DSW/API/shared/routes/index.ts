import {response, Router} from "express";

const routes = Router();

routes.get('/', (request, response) => {
    response.json({message: 'Hellow Dev!'});
    return;
})

export default routes;