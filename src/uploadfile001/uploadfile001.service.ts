import { Injectable, Inject } from '@nestjs/common';
import { Uploadfile001 } from './entity/uploadfile001.entity';
import { Uploadfile001Dto } from './dto/uploadfile001.dto';
import { response } from 'express';

@Injectable()
export class Uploadfile001Service {
    constructor(@Inject('uploadfile001Repo') private readonly uploadfile001 : typeof Uploadfile001 ){}

    async uploadfile(data: any){
        return  await this.uploadfile001.create(data)
    }

    // async insertOrder_id (order_id: number,originalname: string ){
    //     console.log(originalname)
    //     console.log(order_id)
    //     const found = await this.uploadfile001.findAll({
    //         // attributes: [
    //         //     'originalname'
    //         // ],
    //         where: {
    //             originalname: originalname
    //         }
    //     })
    //     if(found[0]){
    //         return await found[0].update(order_id)
    //     }
        
    // }

    async findByfilename (filename: string){
        const found = await this.uploadfile001.findAll({
            attributes: [
                'order_id'
            ],
            where: {
                originalname: filename
            }
        })
        if (!found ){
            return console.log('ssss')
        }
       var order = {
           order_id: 1
       }
        return found
    }

    async insertorder_id (originalnames : string , order_id : any){
        console.log('order_id = ', order_id)
        const found = await this.uploadfile001.findAll({
            where: {
                originalname : originalnames
            }
        })
        if(!found){
            return 'ไม่พบ'
        }
        //found.find(item => item.originalname == originalnames).order_id = order_ids
        return found[0].update(order_id)
    }
}
