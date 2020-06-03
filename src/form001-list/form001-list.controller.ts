import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Form001ListService } from './form001-list.service';
import { Form001_ListDto } from './dto/form001-list.dto';

@Controller('form001-list')
export class Form001ListController {
    constructor( private readonly form001_2Service : Form001ListService){}

    @Get()
    async getForm001_2(){
        return this.form001_2Service.getForm001_2();
    }

    @Get('/:sid')
    async getForm001_2Bysid(@Param('sid') sid : string){
        return this.form001_2Service.getForm001_2Bysid(sid);
    }

    @Post('/insert')
    async insertForm001_2(@Body() form001_ListDto: Form001_ListDto){
        return this.form001_2Service.insertForm001_2(form001_ListDto)
    }
}
