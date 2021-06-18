import { Request, Response } from 'express';
import {getAll} from "./placesRepository";


export async function getPlaces(req: Request, res: Response) {
    try{
        const data = await getAll();
        if(data) {
            res.json({data: data[0]}).status(200);
        }
    }
    catch (err) {
        res.json({error: err}).status(500)
    }
}
