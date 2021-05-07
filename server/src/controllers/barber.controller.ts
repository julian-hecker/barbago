import { Request, Response } from 'express';

import Barber from '../models/Barber';

/**
 * @api {GET} /api/barber/:id Get Barber
 * @apiName getBarber
 * @apiGroup Barber
 *
 * @apiParam {Number} id Barber ID
 */
export const getBarber = (req: Request, res: Response) => {
    const { id } = req.params;
    res.sendStatus(501);
};

/**
 * @api {POST} /api/barber/ Create Barber
 * @apiName createBarber
 * @apiGroup Barber
 */
export const createBarber = (req: Request, res: Response) => {
    res.sendStatus(501);
};

/**
 * @api {PUT} /api/barber/:id Update Barber
 * @apiName updateBarber
 * @apiGroup Barber
 *
 * @apiParam {Number} id Barber ID
 */
export const updateBarber = (req: Request, res: Response) => {
    const { id } = req.params;
    res.sendStatus(501);
};

/**
 * @api {DELETE} /api/barber/:id Delete Barber
 * @apiName deleteBarber
 * @apiGroup Barber
 *
 * @apiParam {Number} id Barber ID
 */
export const deleteBarber = (req: Request, res: Response) => {
    const { id } = req.params;
    res.sendStatus(501);
};

/**
 * @api {GET} /api/barber/ Get All Barbers
 * @apiName getAllBarbers
 * @apiGroup Barber
 */
export const getAllBarbers = (req: Request, res: Response) => {
    res.sendStatus(501);
};

/**
 * @api {GET} /api/barber/search Search Barbers
 * @apiName searchBarbers
 * @apiGroup Barber
 */
export const searchBarbers = (req: Request, res: Response) => {
    res.sendStatus(501);
};
