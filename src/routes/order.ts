import { Router } from 'express';
import { auth } from '../controllers/auth';
import { setQuestion, setResponse } from '../controllers/menssage';

const route = Router();

route.get('/',auth ,setResponse);
route.get('/getAll',auth ,setResponse);
route.post('/create',auth ,setQuestion);

export default route