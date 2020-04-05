import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { SinginUser } from 'src/user/dto/singin-user.dto';
var sha256 = require('sha256');
@Injectable()
export class AuthService {
    constructor(private userService: UserService) {} 

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.getUserBySid(username);
        if (user) {
          const userpass = await this.userService.getPassBySid(username);
          const pass = Object.values(userpass)
          if(sha256(password)==pass[0]){
            return user;
          }
          else{
            return "Password Incorrect";
          }
        }
        else {
            const profile = new SinginUser();
            profile.username = username;
            profile.password = password;
            console.log(profile);
            const user = await this.userService.siginIn(profile);
            return user;
        } 
      }
}
