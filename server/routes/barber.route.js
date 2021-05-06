import { Router } from 'express';
import {
    createBarber,
    deleteBarber,
    getAllBarbers,
    getBarber,
    searchBarbers,
    updateBarber,
} from '../controllers/barber.controller.js';

const barberRouter = Router();

/**
 * @api {GET} /api/barber/search search for barbers
 * @apiName searchBarbers
 * @apiGroup Barber
 */
barberRouter.get('/search', searchBarbers);

/**
 * @api {get} /api/barber/:id get one barber
 * @apiName getBarber
 * @apiGroup Barber
 * 
 * @apiParam {Number} id Barber ID
 */
barberRouter.get('/:id', getBarber);

/**
 * @api {PUT} /api/barber/:id update one barber
 * @apiName updateBarber
 * @apiGroup Barber
 * 
 * @apiParam {Number} id Barber ID
 */
barberRouter.put('/:id', updateBarber);

/**
 * @api {DELETE} /api/barber/:id delete one barber
 * @apiName deleteBarber
 * @apiGroup Barber
 * 
 * @apiParam {Number} id Barber ID
 */
barberRouter.delete('/:id', deleteBarber);

/**
 * @api {post} /api/barber/create create barber
 * @apiName createBarber
 * @apiGroup Barber
 */
barberRouter.post('/', createBarber);

/**
 * @api {get} /api/barber/ get all barbers
 * @apiName getAllBarbers
 * @apiGroup Barber
 */
barberRouter.get('/', getAllBarbers);

export default barberRouter;
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
