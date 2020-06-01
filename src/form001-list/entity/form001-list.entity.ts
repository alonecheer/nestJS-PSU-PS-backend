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
import { User } from 'src/users/entity/users.entity';

@Table({
    timestamps: true,
    paranoid: true,
})
export class Form001_List extends Model<Form001_List>{
    @PrimaryKey
    @AutoIncrement
    @Column
    l_id: number
    
    @Column
    l_detail: string;

    @Column
    l_amount: number;

    @Column
    l_unit: string;

    @Column
    l_priceunit: number;

    @BelongsTo(()=> User)
    user:User;

    @AllowNull(false)
    @ForeignKey(() => User)
    @Column
    sid: string;
}