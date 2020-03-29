import { Module } from '@nestjs/common';
import { UserloginpsuService } from './userloginpsu.service';
import { UserloginpsuController } from './userloginpsu.controller';

@Module({
  providers: [UserloginpsuService],
  controllers: [UserloginpsuController]
})
export class UserloginpsuModule {}
