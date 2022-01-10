import { Router } from 'express';
import { auth } from '../controllers/auth';
import { setQuestion, setResponse } from '../controllers/menssage';

const route = Router();

route.post('/question',auth ,setQuestion);
route.post('/response',auth ,setResponse);

export default route