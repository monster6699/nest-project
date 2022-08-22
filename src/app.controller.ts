import { DbService } from './db.service';
import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    @Inject("dbProvideServer")
    private readonly dbService: DbService) {}
   

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("db")
  getDbInfo(): string { 
    return this.dbService.connect()
  } 
}
