import { Injectable, Inject } from '@nestjs/common';
import { Form001_List } from './entity/form001-list.entity';
import { Form001_ListDto } from './dto/form001-list.dto';

@Injectable()
export class Form001ListService {
    constructor(@Inject('form001_listRepo') private readonly form001_list: typeof Form001_List){}

    async getForm001_2(){
        return await this.form001_list.findAll();
    }

    async insertForm001_2(form001_ListDto: Form001_ListDto){
        return await this.form001_list.create(form001_ListDto)
    }
    async getForm001_2Bysid(sid : string){
        const found = await this.form001_list.findAll({
            where: {
                sid: sid
            }
        })
        if (!found){
            return 0;
        }
        return found;
    }
    async getForm001_2Byorder_id(order_id : number){
        const found = await this.form001_list.findAll({
            where: {
                order_id: order_id
            }
        })
        if (!found){
            return 0;
        }
        return found;
    }
}
