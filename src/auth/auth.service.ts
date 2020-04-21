import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
var sha256 = require('sha256')
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ){}

    async validateUser(username: string, password: string): Promise<any> {

        const userinDB = await this.usersService.getUserBySid(username);
        if (userinDB) {
          const passbysid = await this.usersService.getPasswordBysid(username);
          const pass = Object.values(passbysid)
          if (sha256(password) == pass[0]) {
            return userinDB;
          }
          else {
            return null; // password Incorrect
          }
        }
        else {
          const profile = new CreateUserDto();
          profile.username = username;
          profile.password = password;
          const user = await this.usersService.siginIn(profile);
          if (user == "Password Incorrect") {
            return null;
          }
          return user;
        }
      }
}
