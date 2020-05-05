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
                'o_sub_cg','o_list_n','o_other_m',
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
}