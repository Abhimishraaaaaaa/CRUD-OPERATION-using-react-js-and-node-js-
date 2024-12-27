import express from 'express'
import { create, get, update, delate } from '../controller/usercontroller.js'

const routers = express.Router()

routers.post('/create', create)
routers.get('/get', get)
routers.put('/update:id', update)
routers.delete('/delete:id', delate)
    // routers.put('/update/:id', Updated)
    // routers.delete('/delete/:id', Delete)



export default routers