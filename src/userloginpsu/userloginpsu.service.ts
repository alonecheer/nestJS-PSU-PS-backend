import { Injectable, Inject } from '@nestjs/common';
import { Userpsu } from './userloginpsu.entity';
@Injectable()
export class UserloginpsuService {
    constructor(
        @Inject('Userpsu_REPOSITORY') private userpsuRepository: typeof Userpsu) {}

    async findAll(): Promise<Userpsu[]>{
        return this.userpsuRepository.findAll<Userpsu>();
    }
}
