import { Module } from '@nestjs/common';
import { StatusForm001Controller } from './status-form001.controller';
import { StatusForm001Service } from './status-form001.service';
import { DatabaseModule } from 'src/database/database.module';
import { Status_Form001Providers } from './status-form001.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [StatusForm001Controller],
  providers: [StatusForm001Service,...Status_Form001Providers]
})
export class StatusForm001Module {}
