import { Router } from 'express';
import { getToken, auth } from '../controllers/auth';

const route = Router();

route.post('/getToken',getToken);

export default route