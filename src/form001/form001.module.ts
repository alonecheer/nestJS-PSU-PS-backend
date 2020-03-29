import { Module } from '@nestjs/common';
import { Form001Controller } from './form001.controller';
import { Form001Service } from './form001.service';
import { DatabaseModule } from 'src/database/database.module';
import { Form001Providers } from './form001.provider';


@Module({
  imports:[DatabaseModule],
  controllers: [Form001Controller],
  providers: [Form001Service,...Form001Providers]
})
export class Form001Module {}
