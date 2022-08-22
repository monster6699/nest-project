import { NaService } from './na.service';
import { Controller, Get } from '@nestjs/common';

@Controller('na')
export class NaController {
    constructor(private readonly naService: NaService) {}
    @Get()
    getInfo() {
        return this.naService.getNaInfo();
    }
}
