import { Router } from 'express';
import productsRouter from './products.routes'


const routes = Router(); 

routes.use('/products', productsRouter)

routes.use('/', (req, res) =>{
    res.send("Para mais informações acesse o README")
})

export default routes;