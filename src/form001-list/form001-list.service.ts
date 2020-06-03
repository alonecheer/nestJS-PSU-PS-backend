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
}
