import { Controller, Post, Body , Get, Param ,UseGuards,Request} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}
    @Get('/')
    test(){
        return 'test'
    }
    
    @Get('/:sid')
    getUserBySid(@Param('sid') sid: string) {
        return this.userService.getUserBySid(sid);
    }

    
    @Post('/signin')
    signIn(@Body() username: string, password: string) {
        console.log('singin Controller')
        return  this.userService.siginIn(username,password);
    }
}
