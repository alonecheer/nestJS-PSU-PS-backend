import { Controller, Post, Body , Get, Param ,UseGuards,Request} from '@nestjs/common';
import { UserloginpsuService } from './userloginpsu.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('userloginpsu')
export class UserloginpsuController {
    constructor(private userloginpsu: UserloginpsuService,
                private authService: AuthService){}

    @Get('/')
    getAlluser() {
      return this.userloginpsu.getAlluser()
    }

    @Get('/:sid')
    getUserBysid(@Param('sid') sid: string){
      return this.userloginpsu.getUserBysid(sid);
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    login(@Request() req){
      return this.authService.loginpsu(req.sid)
    }
}
