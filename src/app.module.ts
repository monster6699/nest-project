import { prodConfig } from './config/prod.config';
import { devConfig } from './config/dev.config';
import { ProdService } from './prod.service';
import { DevService } from './dev.service';
import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbService } from './db.service'
import { config } from 'dotenv'
import { join } from 'path'
import { NaModule } from './na/na.module';
import { SonModule } from './son/son.module';
config({ path: join(__dirname, '../.env') })
const appNameProvider = {
  provide: 'appName',
  useValue: 'monster',
}
const configPrivoder = {
  provide: 'envConfig',
  useClass: process.env.NODE_ENV === 'development' ? DevService : ProdService,
}
const envPrivoder = {
  provide: 'envValueConfig',
  useValue: process.env.NODE_ENV === 'development' ? devConfig : prodConfig,
}
@Module({
  imports: [NaModule],
  controllers: [AppController],
  providers: [
    AppService,
    envPrivoder,
    {
      provide: 'dbProvideServer',
      inject: ["envValueConfig"],
      useFactory(envValueConfig) {
        return new DbService(envValueConfig)
      }
    },
    appNameProvider,
    configPrivoder,
   
  ],


})
export class AppModule {}
