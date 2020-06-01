import { Module } from '@nestjs/common';
import { Form001ListController } from './form001-list.controller';
import { Form001ListService } from './form001-list.service';
import { DatabaseModule } from 'src/database/database.module';
import { Form001_ListProviders } from './form001-list.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [Form001ListController],
  providers: [Form001ListService,...Form001_ListProviders]
})
export class Form001ListModule {}
