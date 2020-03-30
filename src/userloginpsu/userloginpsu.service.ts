import { Injectable, Inject } from '@nestjs/common';
import { Userpsu } from './userloginpsu.entity';
import * as soap from 'soap';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserloginpsuService {
    constructor(
        @Inject('Userpsu_REPOSITORY') private userpsu: typeof Userpsu) {}

    async getAlluser(): Promise<Userpsu[]>{
        return this.userpsu.findAll<Userpsu>();
    }

    getHello(): string {
        return 'Hello World! userloginpsuService';
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

    async login(CreateUserDto: CreateUserDto) {
        const result = await this.loginPSUPassport(CreateUserDto.username, CreateUserDto.password);
        const profile = new Userpsu();
        profile.sid = result[0];
        profile.firstname = result[1];
        profile.lastname = result[2];
        profile.cid = result[3];
        return this.userpsu.create(profile.toJSON())
    }

}
