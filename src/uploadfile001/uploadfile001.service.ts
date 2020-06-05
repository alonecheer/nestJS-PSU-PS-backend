import { Injectable, Inject } from '@nestjs/common';
import { Uploadfile001 } from './entity/uploadfile001.entity';
import { Uploadfile001Dto } from './dto/uploadfile001.dto';
import { response } from 'express';

@Injectable()
export class Uploadfile001Service {
    constructor(@Inject('uploadfile001Repo') private readonly uploadfile001 : typeof Uploadfile001 ){}

    async uploadfile(file: any){
        return  await this.uploadfile001.create(file)
    }

    async insertOrder_id (){
        return await this.uploadfile001.create()
    }

    async findByfilename (filename: string){
        console.log(filename)
        const found = await this.uploadfile001.findAll({
            attributes: [
                'originalname'
            ],
            where: {
                filename: filename
            }
        })
        if (!found){
            return 0;
        }
        return found;
    }
}
