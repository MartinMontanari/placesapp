import { Request, Response } from 'express';


export function indexWelcome( req: Request, res: Response) {
    return res.json({Hi: 'Welcome to my API'}).status(200);
}

