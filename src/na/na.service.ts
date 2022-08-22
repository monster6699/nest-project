import { SonService } from './../son/son.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class NaService {
    constructor(private readonly sonService: SonService,
        @Inject("sonProvice")
        private readonly sonProvice: string,

        ) {}
    getNaInfo() {
        return 'na info' + this.sonService.getSonInfo() + this.sonProvice
    }
}
