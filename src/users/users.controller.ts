import { Controller, Request, Post, UseGuards, Body, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get('/')
    getAllUser() {
        return this.usersService.findAll();
    }

    @Get('/:sid')
    getUserBySid(@Param('sid') sid: string) {
        return this.usersService.getUserBySid(sid);
    }
    
    @Post('/signin')
    signIn(@Body() CreateUserDto:CreateUserDto) {
        return this.usersService.siginIn(CreateUserDto);
    }
}
