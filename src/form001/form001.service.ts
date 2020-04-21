import { Injectable,Inject } from '@nestjs/common';
import { Form001 } from './entity/forms.entity';


@Injectable()
export class Form001Service {
    constructor(@Inject('form001Repo') private readonly form001: typeof Form001){}


    
    async getForm001(){
        return await this.form001.findAll();
    }
    async addForm001(form001 : Form001){
        return await this.form001.create(form001);
    }

}