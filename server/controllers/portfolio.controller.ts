import { NextFunction, Request, Response } from 'express';


export class PortfolioController {
    private async logNetworkRequest(request: Request, response: Response): Promise<Response> {

        return response.status(200);
    }
}