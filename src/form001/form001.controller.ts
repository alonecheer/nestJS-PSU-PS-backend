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
import { response } from 'express';

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
    async getForm001Bysid(@Param('sid') sid:string){
      return this.form001Service.getForm001Bysid(sid)
    }


    @Delete(':o_orderid')
    async deletehistory(@Param('o_orderid') o_orderid : number){
      let response = {};
      const history = await this.form001Service.deletehistory(o_orderid);
      if (history === false){
        response ={
          message: 'ไม่พบข้อมูล'
        };
      }
      else {
        response ={
          message: 'ลบช้อมูลเรียบร้อยแล้ว'
        };
      }
      return response
    }
}
