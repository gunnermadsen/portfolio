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
                method: request.method,
                protocol: request.protocol,
                subdomains: request.subdomains,
                baseUrl: request.baseUrl,
                originalUrl: request.originalUrl,
                timestamp: new Date()
            }
            await requestLogModel.create(data)

            return
        } 
        catch (error) {
            return
        }
    }
}