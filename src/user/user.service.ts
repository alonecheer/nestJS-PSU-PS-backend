import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.entity';
@Injectable()
export class UserService {
    constructor(
        @Inject('User_REPOSITORY') private user: User) {}
        
}
