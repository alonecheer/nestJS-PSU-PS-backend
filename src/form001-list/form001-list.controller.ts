import { Controller, Get } from '@nestjs/common';
import { Form001ListService } from './form001-list.service';

@Controller('form001-list')
export class Form001ListController {
    constructor( private readonly form001_2Service : Form001ListService){}

    @Get()
    async getForm001_2(){
        return this.form001_2Service.getForm001_2();
    }
}
