import { SonModule } from './../son/son.module';
import { Module } from '@nestjs/common';
import { NaController } from './na.controller';
import { NaService } from './na.service';

@Module({
  imports: [SonModule],
  controllers: [NaController],
  providers: [NaService]
})
export class NaModule {}
