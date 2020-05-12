import { Injectable,Inject } from '@nestjs/common';
import { Form001 } from './entity/forms.entity';
import { InsertFormDto } from './dto/forms.dto';


@Injectable()
export class Form001Service {
    constructor(@Inject('form001Repo') private readonly form001: typeof Form001){}

    async getForm001(){
        return await this.form001.findAll();
    }

    async insertForm001(insertForm001:InsertFormDto){
        return await this.form001.create(insertForm001);
    }

    async getForm001Bysid(sid : string){
        const found = await this.form001.findAll({
            attributes: [
                'sid','o_location','o_date','o_purpose',
                'o_projectname','o_require','o_specific',
                'o_appointment','o_results','o_committee1',
                'o_committee2','o_committee3','o_committee4',
                'o_committee5','o_committee6','o_gvm_sub',
                'o_income','o_aml_income','o_direction',
                'o_policy','o_works','o_task','o_expense_cg',
                'o_sub_cg','o_list_n','o_other_m','order_id'
            ],
            where: {
                sid: sid
            }
        })
        //console.log('found = xxxxxxxxxxxxxx',found)
        if (!found){
            return 0;
        }
        return found;
    }
    async getForm001Byorder_id(order_id : number){
        const data = await this.form001.findByPk(order_id);
        if(data){
            console.log('Data : ',data)
        return data; 
        }
        return console.log('not data')
       
    }

    async deletehistory(o_orderid: number){
        const data = await this.form001.findByPk(o_orderid);
        if(data) {
            return await data.destroy();
        }
        return false;
    }

    async updatehistory(order_id: number , insertForm001: InsertFormDto){
        const data = await this.form001.findByPk(order_id);
        if(data) {
            return await data.update(insertForm001);
        }
        return false;
    }
}