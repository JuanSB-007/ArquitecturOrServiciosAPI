
import { Router } from "express";

const routerProducto = Router();

routerProducto.get("",(req,res) => {

    res.status(200).json({
        success: true

    })
})

export default routerProducto;