import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { TypeformService } from './typeform.service';
import { TypeformDto } from './dto/typeform.dto';

@Controller('typeform')
export class TypeformController {
    constructor(private readonly typeformService: TypeformService){}

    @Get()
    async getTypeform(){
        return await this.typeformService.getTypeform();
    }

    @Post('/settype')
    async setTypeform(@Body() typeformDto: TypeformDto) {
        return await this.typeformService.setTypeform(typeformDto);
    }

    @Delete(':o_typedoc')
    async deletetypedoc(@Param('o_typedoc') o_typedoc: number){
        return this.typeformService.deleteTypeform(o_typedoc);
    }
}
