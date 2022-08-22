import { Injectable } from '@nestjs/common';

@Injectable()
export class SonService {
    getSonInfo() {
        return "son info"
    }
}
