
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service'
import { UserloginpsuModule } from './userloginpsu/userloginpsu.module';

@Module({
  imports: [DatabaseModule,AuthModule, UsersModule, UserloginpsuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}