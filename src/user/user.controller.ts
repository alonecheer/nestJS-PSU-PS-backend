import { Controller, Post, Body , Get, Param ,UseGuards,Request} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get('/')
    getAll(){
        return 'SSSS'
    }
}
