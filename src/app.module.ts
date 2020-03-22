
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service'

@Module({
  imports: [DatabaseModule,AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}