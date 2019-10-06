import { NextFunction, Request, Response } from 'express';
import { RequestLogs } from '../models/log.model';
import { Database } from '../db';

const requestLogModel = new RequestLogs().getModelForClass(RequestLogs)

Database.connect()

export class PortfolioController {

    // what information do we want to log?
    // IP address
    // Time stamp

    public static async logNetworkRequest(request: Request, response: Response): Promise<void> {
        try {
            let data = {
                ip: request.ip,
                ips: request.ips,
                isSecure: request.secure,
                hostname: request.hostname,
                isXHR: request.xhr,
                cookies: request.cookies,
                url: request.url,
                timestamp: new Date()
            }

            let result = await requestLogModel.create(data)
            return
        } 
        catch (error) {
            console.log(error)
        }
    }
}