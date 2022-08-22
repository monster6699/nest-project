import { Injectable } from '@nestjs/common';

@Injectable()
export class DevService {
    public connect() {
        return "dev method"
    }
}
