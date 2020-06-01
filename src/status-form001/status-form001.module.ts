import { Module } from '@nestjs/common';
import { StatusForm001Controller } from './status-form001.controller';
import { StatusForm001Service } from './status-form001.service';

@Module({
  controllers: [StatusForm001Controller],
  providers: [StatusForm001Service]
})
export class StatusForm001Module {}
