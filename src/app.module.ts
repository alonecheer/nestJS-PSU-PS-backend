import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { Form001Module } from './form001/form001.module';
import { TypeformModule } from './typeform/typeform.module';
import { StatusForm001Module } from './status-form001/status-form001.module';
import { Form001ListModule } from './form001-list/form001-list.module';




@Module({
  imports: [UsersModule, DatabaseModule, AuthModule,Form001Module, TypeformModule, StatusForm001Module, Form001ListModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule {}
