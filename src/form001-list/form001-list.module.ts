import { Module } from '@nestjs/common';
import { Form001ListController } from './form001-list.controller';
import { Form001ListService } from './form001-list.service';

@Module({
  controllers: [Form001ListController],
  providers: [Form001ListService]
})
export class Form001ListModule {}
