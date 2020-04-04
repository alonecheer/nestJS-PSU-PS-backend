import { Controller, Post, Body , Get, Param ,UseGuards,Request} from '@nestjs/common';
import { UserService } from './user.service';
import { SinginUser } from './dto/singin-user.dto';

@Controller('users')
export class UserController {
    constructor(private userService: UserService,) {}
    @Get('/')
    test(){
        return 'test'
    }
    
    @Get('/:sid')
    getUserBySid(@Param('sid') sid: string) {
        return this.userService.getUserBySid(sid);
    }

    
    @Post('/signin')
    signIn(@Body() singinUser:  SinginUser) {
        return this.userService.siginIn(singinUser)
    }
}
