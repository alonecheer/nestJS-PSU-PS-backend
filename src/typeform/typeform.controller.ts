import { Controller, Get, Post, Body, Delete, Param, Patch } from '@nestjs/common';
import { TypeformService } from './typeform.service';
import { TypeformDto } from './dto/typeform.dto';

@Controller('typeform')
export class TypeformController {
    constructor(private readonly typeformService: TypeformService){}

    @Get()
    async getTypeform(){
        return await this.typeformService.getTypeform();
    }

    @Get(':o_typedoc')
    async getvalueTypedoc(@Param('o_typedoc') o_typedoc: number){
        return this.typeformService.getvalueTypedoc(o_typedoc)
    }

    @Post('/settype')
    async setTypeform(@Body() typeformDto: TypeformDto) {
        return await this.typeformService.setTypeform(typeformDto);
    }

    @Delete(':o_typedoc')
    async deleteTypedoc(@Param('o_typedoc') o_typedoc: number){
        return this.typeformService.deleteTypeform(o_typedoc);
    }

    @Patch(':o_typedoc')
    async updateTypedoc(@Param('o_typedoc') o_typedoc: number ,@Body() typeformDto:TypeformDto){
        return this.typeformService.updateTypedoc(o_typedoc,typeformDto);
    }
}
