import { Router } from 'express';
import { authenticateToken } from '../utils/auth';
import {
    createBarber,
    deleteBarber,
    getAllBarbers,
    getBarber,
    searchBarbers,
    updateBarber,
} from '../controllers/barber.controller';

const barberRouter = Router();

barberRouter.get('/search', searchBarbers);

barberRouter.get('/:id', getBarber);

barberRouter.put('/:id', updateBarber);

barberRouter.delete('/:id', deleteBarber);

barberRouter.post('/', createBarber);

barberRouter.get('/', getAllBarbers);

export default barberRouter;
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
