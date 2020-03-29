import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
} from 'sequelize-typescript';

@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001 extends Model<Form001> {
    @PrimaryKey
    @AutoIncrement
    @Column
    o_id: number;


    @Column
    o_no: string;


    @Column
    o_date: string;


    @Column
    o_year: string;


    @Column
    o_purpose: string;


    @Column
    o_committee1: string;


    @Column
    o_committee2: string;


    @Column
    o_committee3: string;

    
    @Column
    o_numdoc: number;

    
    @Column
    o_pricedoc: number;

    
    @Column
    o_committee4: string;

    
    @Column
    o_committee5: string;

    
    @Column
    o_committee6: string;

    
    @Column
    o_budgettype: string;

    
    @Column
    o_budgetname: string;

    
    @Column
    o_budgetdoc: number;

    
    @Column
    o_approve: string;

    
    @Column
    o_approver: string;

    
    @Column
    staff_id: string;

    
    @Column
    o_status: string;

    
    @Column
    o_status_id: number;

    
    @Column
    o_user: string;

}