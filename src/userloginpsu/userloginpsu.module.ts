import { Module } from '@nestjs/common';
import { UserloginpsuService } from './userloginpsu.service';
import { UserloginpsuController } from './userloginpsu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userloginpsuProviders } from './userloginpsu.providers';
import { from } from 'rxjs';
@Module({
  imports: [DatabaseModule],
  controllers: [UserloginpsuController],
  providers: [
    UserloginpsuService,
    ...userloginpsuProviders],
})
export class UserloginpsuModule {}
