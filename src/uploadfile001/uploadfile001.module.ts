import { Module } from '@nestjs/common';
import { Uploadfile001Controller } from './uploadfile001.controller';
import { Uploadfile001Service } from './uploadfile001.service';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express'
import { DatabaseModule } from 'src/database/database.module';
@Module({
  imports:[MulterModule.register({
    dest: './files'
  }),DatabaseModule],
  controllers: [Uploadfile001Controller],
  providers: [Uploadfile001Service]
})
export class Uploadfile001Module {}
