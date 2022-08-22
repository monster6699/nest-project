import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdService {
    public connect() {
        return "prod method"
    }
}
