import {
    AllowNull,
    Column,
    Model,
    PrimaryKey,
    Table,
    AutoIncrement,
    HasMany,
    ForeignKey,
    BelongsTo,
    Sequelize
} from 'sequelize-typescript';


@Table({
    timestamps: true,
    paranoid: true,
})
export class Status_form001 extends Model<Status_form001> {
    @PrimaryKey
    @AutoIncrement
    @Column
    s_id: number
    
    @Column
    s_detail_th: string;

    @Column
    s_detail_en: string;


}
    