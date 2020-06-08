import { Module } from '@nestjs/common';
import { UserTypeController } from './user-type.controller';
import { UserTypeService } from './user-type.service';
import { DatabaseModule } from 'src/database/database.module';
import { User_typeProviders } from './user-type.provider';
@Module({
  imports:[DatabaseModule],
  controllers: [UserTypeController],
  providers: [UserTypeService,...User_typeProviders]
})
export class UserTypeModule {}
