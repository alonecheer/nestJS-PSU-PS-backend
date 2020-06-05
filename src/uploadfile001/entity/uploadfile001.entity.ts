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
    HasOne
} from 'sequelize-typescript';
import { Form001 } from 'src/form001/entity/forms.entity'
@Table({
    timestamps: true,
    paranoid: true,
})
export class Uploadfile001 extends Model<Uploadfile001>{
    @PrimaryKey
    @AutoIncrement
    @Column
    f_id: number;

    @Column
    f_name: string;

    @BelongsTo(()=> Form001)
    form001: Form001;

    @AllowNull(false)
    @ForeignKey(() => Form001)
    @Column
    order_id: number
}
