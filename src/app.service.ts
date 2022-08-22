import { DbService } from './db.service';
import { Injectable,Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject("dbProvideServer")
    private readonly dbService: DbService,
    @Inject("appName")
    private readonly name: string,
    @Inject("envConfig")
    private readonly config: any,
    @Inject("envValueConfig")
    private readonly envValue: {url: string}
    ){}
  getHello(): string {
    return  this.envValue.url + "," + this.config.connect();
  }
}
