import {
    Controller,
    Get,
    HttpStatus,
    Res,
    Post,
    Body,
    Delete,
    Param,
    Patch,
  } from '@nestjs/common';
import { Form001Service } from './form001.service';
import { InsertFormDto } from './dto/forms.dto';

@Controller('form001')
export class Form001Controller {
    constructor(private readonly form001Service: Form001Service) {}

    @Get()
    async getForm001(@Res() res){
        let status = HttpStatus.OK;
        let response = {};
        
        const form001 = await this.form001Service.getForm001();
        response = {form001};
        console.log(form001)
        return res.status(status).json(response);
    }

    @Get('/test')
    getAllUser() {
        return 'form001'
    }


    @Post('/insert')
    async insertForm001(@Body() InsertFormDto:InsertFormDto ){
        console.log('xxx',InsertFormDto)
      return  this.form001Service.insertForm001(InsertFormDto);
    }
    
    @Get('/:sid')
    getForm001Bysid(@Param('sid') sid:string){
      return this.form001Service.getForm001Bysid(sid)
    }
}
