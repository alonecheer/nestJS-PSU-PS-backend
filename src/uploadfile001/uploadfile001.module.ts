import { Module } from '@nestjs/common';
import { Uploadfile001Controller } from './uploadfile001.controller';
import { Uploadfile001Service } from './uploadfile001.service';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express'
@Module({
  imports:[MulterModule.register({
    dest: './uploads'
  })],
  controllers: [Uploadfile001Controller],
  providers: [Uploadfile001Service]
})
export class Uploadfile001Module {}
