import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import * as soap from 'soap';
import * as bcrypt from 'bcrypt';
var sha256 = require('sha256')
import { SinginUser } from './dto/singin-user.dto';
@Injectable()
export class UserService {
    constructor(
        @Inject('User_REPOSITORY') private user: typeof  User) {}

    async findAll(): Promise<User[]> {
        return this.user.findAll<User>();
    }

    async siginIn(singinUser:  SinginUser) {
        // console.log('username Service : ',username)
        // console.log('password Service : ',password)
        const result = await this.loginPSUPassport(singinUser);
        console.log('resule', result)
        const profile = new User();
        profile.sid = result[0];
        profile.password = await bcrypt.hash(singinUser.password, 10);
        profile.firstname = result[1];
        profile.lastname = result[2];
        profile.cid = result[3];
        const found = await this.getUserBySid(result[0])
        if (found) {
            return `Have a Profile ${result[0]} , Detail is ${JSON.stringify(found)}`;
        } else {
            return this.user.create(profile.toJSON())
        }
    }
    async  loginPSUPassport(singinUser:  SinginUser) {
        const PSU_URL = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
        return new Promise((resolve, reject) => {
            soap.createClient(PSU_URL, (err, client) => {
                if (err) return reject(err);

                let user = {
                    username: singinUser.username,
                    password: singinUser.password
                }

                client.GetStaffDetails(user, (err, response) => {
                    if (err) return reject(err);
                    else
                        return resolve(response.GetStaffDetailsResult.string);
                })
            })
        })
    }
    async getUserBySid(sid: string) {
        const found = await this.user.findByPk(sid);
        if (!found) {
            return 0;
        }
        return found.toJSON();
    }    
}
