import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo
} from 'sequelize-typescript';
import { User } from 'src/users/entity/users.entity';

@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001 extends Model<Form001> {
    @PrimaryKey
    @AutoIncrement
    @Column
    order_id: number
    
    @Column
    o_location: string;


    @Column
    o_date: string;

    @Column
    o_purpose: string;
    
    @Column
    o_projectname: string;

    @Column
    o_require: string;

    @AllowNull(true)
    @Column
    o_specific : number;

    @AllowNull(true)
    @Column
    o_appointment: number;

    @AllowNull(true)
    @Column
    o_results: number;

    @Column
    o_committee1: string;

    @Column
    o_committee2: string;

    @Column
    o_committee3: string;

    @Column
    o_committee4: string;

    @Column
    o_committee5: string;

    @Column
    o_committee6: string;

    @AllowNull(true)
    @Column
    o_gvm_sub: number;

    @AllowNull(true)
    @Column
    o_income: number;

    @AllowNull(true)
    @Column
    o_aml_income: number;

    @Column
    o_direction: string;

    @Column
    o_policy: string;

    @Column
    o_works: string;

    @Column
    o_task: string;

    @Column
    o_expense_cg: string;

    @Column
    o_sub_cg: string;

    @Column
    o_list_n: string;

    @AllowNull(true)
    @Column
    o_other_m: number;

    @BelongsTo(()=> User)
    user:User;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    sid: string;
   
}