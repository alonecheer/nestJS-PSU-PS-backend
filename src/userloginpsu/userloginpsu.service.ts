import { Injectable, Inject } from '@nestjs/common';
import { Userpsu } from './userloginpsu.entity';
import * as soap from 'soap';
import { CreateUserDto } from './dto/create-user.dto';
@Injectable()
export class UserloginpsuService {
    constructor(
        @Inject('Userpsu_REPOSITORY') private userpsuRepository: typeof Userpsu) {}

    async findAll(): Promise<Userpsu[]>{
        return this.userpsuRepository.findAll<Userpsu>();
    }

    getHello(): string {
        return 'Hello World! userloginpsuService';
      }

    login(CreateUserDto: CreateUserDto) {
        const PSU_URL = 'https://passport.psu.ac.th/authentication/authentication.asmx?wsdl';
        return new Promise((resolve, reject) => {
            soap.createClient(PSU_URL, (err, client) => {
                if (err) return reject(err);

                let user = {
                    username: CreateUserDto.username,
                    password: CreateUserDto.password
                }

                client.GetStaffDetails(user, (err, response) => {
                    if (err) return reject(err);
                    else
                        return resolve(response.GetStaffDetailsResult.string);
                })
            })
        })
    }
}
