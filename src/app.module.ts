import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { Form001Module } from './form001/form001.module';




@Module({
  imports: [UsersModule, DatabaseModule, AuthModule,Form001Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
