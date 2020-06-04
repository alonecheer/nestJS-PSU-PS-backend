import { Controller, Post, UseInterceptors, UploadedFiles, Get, Res, Param, UploadedFile } from '@nestjs/common';
import { Uploadfile001Service } from './uploadfile001.service';
import { FilesInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../uploadfile001/utils/file-upload.utils';
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
    async uploadMultipleFiles(@UploadedFiles() file) {
      console.log(file);
      const response = [];
      file.forEach(file => {
        const fileReponse = {
          originalname: file.originalname,
          filename: file.filename,
        };
        response.push(fileReponse);
      });
      return response;
    }
  
    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
      return res.sendFile(image, { root: './files' });
    }

    
}
