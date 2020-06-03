import { Injectable, Inject } from '@nestjs/common';
import { Form001_List } from './entity/form001-list.entity';

@Injectable()
export class Form001ListService {
    constructor(@Inject('form001_listRepo') private readonly form001_list: typeof Form001_List){}

    async getForm001_2(){
        return await this.form001_list.findAll();
    }


}
