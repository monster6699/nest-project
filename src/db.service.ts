import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
    constructor(private readonly database: any) {}
    public connect() {
        return "连接数据库" + this.database.url
    }
}
