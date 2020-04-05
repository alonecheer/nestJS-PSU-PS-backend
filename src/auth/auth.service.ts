import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {} 

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.getUserBySid(username);
        if (user) {
          const userpass = await this.userService.getPassBySid(username);
          
        }
        return null;
      }
}
