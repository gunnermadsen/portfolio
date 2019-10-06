import { prop, Typegoose } from '@hasezoey/typegoose';

export class RequestLogs extends Typegoose {
    @prop()
    public ip: string
    @prop()
    public ips: string[]
    @prop()
    isSecure: boolean
    @prop()
    hostname: string
    @prop()
    isXHR: boolean
    @prop()
    cookies: any
    @prop()
    url: string
    @prop()
    timestamp: Date
}