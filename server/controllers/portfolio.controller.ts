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
                method: request.method,
                isSecure: request.secure,
                hostname: request.hostname,
                protocol: request.protocol,
                subdomains: request.subdomains,
                isXHR: request.xhr,
                statusCode: response.statusCode,
                cookies: request.cookies,
                url: request.url,
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