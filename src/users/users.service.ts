import { Injectable , Inject } from '@nestjs/common';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
    constructor(@Inject('USERS_REPOSITORY')private user : typeof User){}

    async findAll(): Promise<User[]> {
        const user = await this.user.findAll<User>();
        return user;
    }

    async getUserBySid(sid: string) {
        const found = await this.user.findByPk(sid);
        if (!found) {
            return 0;
        }
        return found;
    }

    
}
