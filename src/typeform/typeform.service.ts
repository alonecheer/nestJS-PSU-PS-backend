import { Injectable, Inject } from '@nestjs/common';
import { Typeform } from './entity/typeform.entity';
import { TypeformDto } from './dto/typeform.dto';

@Injectable()
export class TypeformService {
    constructor(@Inject('typeformRepo') private readonly typeform: typeof Typeform){}

    async getTypeform() {
        return await this.typeform.findAll();
    }

    async setTypeform(typeform: TypeformDto){
        return await this.typeform.create(typeform)
    }
    
    async deleteTypeform(o_typedoc: number){
        const data = await this.typeform.findByPk(o_typedoc);
        if(data){
            return await data.destroy();
        }
        return false;
    }

    async updateTypedoc(o_typedoc: number, typeformDto: TypeformDto){
        const data = await this.typeform.findByPk(o_typedoc);
        if(data){
            return await data.update(typeformDto);
        }
        return false;
    }

    async getvalueTypedoc(o_typedoc: number){
        const data = await this.typeform.findAll({
            attributes: [
                 "o_typedoc_name"
            ],
            where: {
                o_typedoc: o_typedoc
            }
        })
        if (!data){
            return 0;
        }
        return data[0].o_typedoc_name;
    }
}