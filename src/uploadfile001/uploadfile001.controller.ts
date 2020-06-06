import { Controller, Post, UseInterceptors, UploadedFiles, Get, Res, Param, UploadedFile, Body, Patch } from '@nestjs/common';
import { Uploadfile001Service } from './uploadfile001.service';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../uploadfile001/utils/file-upload.utils';
import { async } from 'rxjs/internal/scheduler/async';
import { type } from 'os';
@Controller('uploadfile001')
export class Uploadfile001Controller {
    constructor(private readonly uploadfile001Service : Uploadfile001Service){}

    @Post('single')
    @UseInterceptors(
      FileInterceptor('image', {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
      
    )
    async uploadedFile(@UploadedFile() file) {
      console.log(file);
      const response = {
        originalname: file.originalname, 
        filename: file.filename,
      };
      return response;
    }
  
    @Post('multiple')
    @UseInterceptors(
      FilesInterceptor('image', 2, {
        storage: diskStorage({
          destination: './files',
          filename: editFileName,
        }),
        fileFilter: imageFileFilter,
      }),
    )
    async uploadMultipleFiles(@UploadedFiles() file ) {
      console.log(file);
      const response = [];
       file.forEach(file => {
        const fileReponse = {
          originalname: file.originalname,
          filename: file.filename,
        };

        response.push(fileReponse);
        return this.uploadfile001Service.uploadfile(file)
      });
      return response;
    }
  
    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
      return res.sendFile(image, { root: './files' });
    }

    @Get('find/:filename')
    findByfilename(@Param('filename') filename){
      return this.uploadfile001Service.findByfilename(filename)
    }
    
    // @Patch('find/:filename')
    // async insertOrder_id(@Param('filename') originalname ,@Body()  order_id: number ){
    //   const upload = await this.uploadfile001Service.insertOrder_id(order_id,originalname);
    //   if(!upload){
    //     return 0
    //   }
    //   else{
    //     return 'พบข้อมูล'
    //   }
    //   let response = {};
    //   return response
    // }

    @Patch('find/:originalname')
    insertorder_id(@Param('originalname') originalnames : string ,@Body() order_id : any){
      return this.uploadfile001Service.insertorder_id(originalnames,order_id)
    }
}
