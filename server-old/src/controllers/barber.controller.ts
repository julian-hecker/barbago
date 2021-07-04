import { Request, Response } from 'express';

import Barber from '../models/Barber';

/**
 * @api {GET} /api/barber/:id Get Barber
 * @apiName getBarber
 * @apiGroup Barber
 *
 * @apiParam {Number} id Barber ID
 */
export const getBarber = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const barber = await Barber.findByPk(id);
        return res.json({ barber });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

/**
 * @api {POST} /api/barber/ Create Barber
 * @apiName createBarber
 * @apiGroup Barber
 */
export const createBarber = async (req: Request, res: Response) => {
    const { first_name, last_name, email, phone } = req.body;
    try {
        const barber = await Barber.create({
            first_name,
            last_name,
            email,
            phone,
        });
        return res.json({ barber });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

/**
 * @api {PUT} /api/barber/:id Update Barber
 * @apiName updateBarber
 * @apiGroup Barber
 *
 * @apiParam {Number} id Barber ID
 */
export const updateBarber = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { first_name, last_name, phone, email } = req.body;
    try {
        const barber = await Barber.findByPk(id);
        if (first_name) barber.first_name = first_name;
        if (last_name) barber.last_name = last_name;
        if (email) barber.email = email;
        if (phone) barber.phone = phone;
        barber.save();
        return res.json({ barber });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

/**
 * @api {DELETE} /api/barber/:id Delete Barber
 * @apiName deleteBarber
 * @apiGroup Barber
 *
 * @apiParam {Number} id Barber ID
 */
export const deleteBarber = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const barber = await Barber.findByPk(id);
        if (barber) {
            barber.destroy();
            return res.send('Barber deleted');
        }
        //Barber.destroy(where:{id:id}).then(num=>num==1?good:bad)
        return res.status(404).send('Barber not found');
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

/**
 * @api {GET} /api/barber/ Get All Barbers
 * @apiName getAllBarbers
 * @apiGroup Barber
 *
 * @apiParam {Number} [limit]   Optional number of results per page
 * @apiParam {Number} [page]    Optional page number of results
 */
export const getAllBarbers = async (req: Request, res: Response) => {
    let limit = parseInt(req.query.limit as string) || 10;
    let page = parseInt(req.query.page as string) || 0;
    try {
        const barbers = await Barber.findAll({
            limit,
            offset: limit * page,
        });
        const info = {
            limit,
            page,
            count: barbers.length,
        };
        return res.json({ barbers, info });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error });
    }
};

/**
 * @api {GET} /api/barber/search Search Barbers
 * @apiName searchBarbers
 * @apiGroup Barber
 */
export const searchBarbers = (req: Request, res: Response) => {
    res.sendStatus(501);
};
