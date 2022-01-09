import { Router } from 'express';
import { create, find, findById, update, deleteById } from '../controllers/user';
import { auth } from '../controllers/auth';

const route = Router();

route.post('/create', create);
route.get('/find', auth, find);
route.get('/find/:id', auth, findById);
route.put('/update/:id', auth, update);
route.delete('/delete/:id', auth, deleteById);


export default route