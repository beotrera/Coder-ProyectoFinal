import { Router } from 'express';
import { deleteAllCart, deleteOneItem, findOne, updateItem, addItem } from '../controllers/cart';
import { auth } from '../controllers/auth';


const route = Router();

route.get('/', auth, findOne)
route.post('/add/item/:productId', auth, addItem);
route.post('/update/item/:productId', auth, updateItem);
route.delete('/delete', auth, deleteAllCart);
route.delete('/delete/item/:id', auth, deleteOneItem);

export default route