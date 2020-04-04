import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { User } from './user.entity';
import * as soap from 'soap';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
    constructor(
        @Inject('User_REPOSITORY') private user: typeof  User) {}

    async findAll(): Promise<User[]> {
        return this.user.findAll<User>();
    }

    async siginIn(username: string, password: string) {
        console.log('username Service : ',username)
        
        const result = await this.loginPSUPassport(username, password);
        console.log('password Service : ',password)
        const profile = new User();
        profile.sid = result[0];
        profile.password = profile.password;
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
    async  loginPSUPassport(psuPassport, password) {
        const PSU_URL = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
        return new Promise((resolve, reject) => {
            soap.createClient(PSU_URL, (err, client) => {
                if (err) return reject(err);

                let user = {
                    username: psuPassport,
                    password: password
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
