import { Controller, Post, Body , Get } from '@nestjs/common';
import { UserloginpsuService } from './userloginpsu.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('userloginpsu')
export class UserloginpsuController {
    constructor(private userloginpsu: UserloginpsuService){}

    @Get()
    getHello(): string {
      return this.userloginpsu.getHello();
    }

    @Post('/login')
    login(@Body() CreateUserDto: CreateUserDto){
        return this.userloginpsu.login(CreateUserDto);
    }
}
