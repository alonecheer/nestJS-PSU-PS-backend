import { Controller, Post, Body , Get, Param ,UseGuards,Request} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService
        ) {}
        
    @Post('/signin')
    signIn(@Body() username: string, password: string) {
        return this.userService.siginIn(username, password);
    }
}
