import { Module } from '@nestjs/common';
import { TypeformController } from './typeform.controller';
import { TypeformService } from './typeform.service';
import { DatabaseModule } from 'src/database/database.module';
import { TypeformProviders } from './typeform.provider';

@Module({
  imports:[DatabaseModule],
  controllers: [TypeformController],
  providers: [TypeformService,...TypeformProviders]
})
export class TypeformModule {}
