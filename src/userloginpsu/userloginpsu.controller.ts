import { Controller, Post, Body , Get, Param } from '@nestjs/common';
import { UserloginpsuService } from './userloginpsu.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('userloginpsu')
export class UserloginpsuController {
    constructor(private userloginpsu: UserloginpsuService){}

    @Get('/')
    getAlluser() {
      return this.userloginpsu.getAlluser()
    }

    @Get('/:sid')
    getUserBysid(@Param('sid') sid: string){
      return this.userloginpsu.getUserBysid(sid);
    }

    @Post('/login')
    login(@Body() CreateUserDto: CreateUserDto){
      return this.userloginpsu.login(CreateUserDto)
    }
}
