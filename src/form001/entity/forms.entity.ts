import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    paranoid: false,
})
export class Form001 extends Model<Form001> {
    @PrimaryKey
    @AutoIncrement
    @Column
    loca: number;


    @Column
    date: string;




}