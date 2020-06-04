import { Module } from '@nestjs/common';
import { Uploadfile001Controller } from './uploadfile001.controller';
import { Uploadfile001Service } from './uploadfile001.service';

@Module({
  controllers: [Uploadfile001Controller],
  providers: [Uploadfile001Service]
})
export class Uploadfile001Module {}
