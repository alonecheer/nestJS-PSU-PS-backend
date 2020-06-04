import { Controller, Post, UseInterceptors, UploadedFiles, Get, Res, Param } from '@nestjs/common';
import { Uploadfile001Service } from './uploadfile001.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { createWriteStream } from 'fs';

@Controller('uploadfile001')
export class Uploadfile001Controller {
    constructor(private readonly uploadfile001Service : Uploadfile001Service){}

    @Get(':imgpath')
    seeUploadFile(@Param('imgpath') image,@Res() res){
        return res.sendFile(image, {root: 'uploads'});
    }

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files'))
    uploadFile(@UploadedFiles() files){
        console.log(files);

    }

    
}
