import { Module } from '@nestjs/common';
import { UserloginpsuService } from './userloginpsu.service';
import { UserloginpsuController } from './userloginpsu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { userloginpsuProviders } from './userloginpsu.providers';
import { AuthModule } from 'src/auth/auth.module';
@Module({
  imports: [DatabaseModule,AuthModule],
  controllers: [UserloginpsuController],
  providers: [
    UserloginpsuService,
    ...userloginpsuProviders],
})
export class UserloginpsuModule {}
