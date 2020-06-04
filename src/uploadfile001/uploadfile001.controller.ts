import { Controller, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { Uploadfile001Service } from './uploadfile001.service';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('uploadfile001')
export class Uploadfile001Controller {
    constructor(private readonly uploadfile001Service : Uploadfile001Service){}

    

    @Post('upload')
    @UseInterceptors(FilesInterceptor('image'))
    uploadFile(@UploadedFiles() File){
        console.log(File);
    }
}
