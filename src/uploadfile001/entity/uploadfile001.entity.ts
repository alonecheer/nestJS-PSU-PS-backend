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
    HasOne,
    BelongsToMany
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

    // @Column
    // f_name: string;

    @Column
    fieldname: string;

    @Column
    originalname: string;

    @Column
    encoding: string;

    @Column
    mimetype: string;

    @Column
    destination: string;

    @Column
    filename: string

    @Column
    path: string

    @Column
    size: number;

    @ForeignKey(() => Form001)
    @Column
    order_id: number 
    
    @BelongsTo(()=> Form001)
    form001: Form001;
}
