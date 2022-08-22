import { Module } from '@nestjs/common';
import { SonController } from './son.controller';
import { SonService } from './son.service';

@Module({
  controllers: [SonController],
  providers: [SonService, {
    provide: "sonProvice",
    useValue: "son value"
  }],
  exports: [SonService, 'sonProvice']
})
export class SonModule {}
