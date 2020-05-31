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
import { Form001 } from 'src/form001/entity/forms.entity';
@Table({
    timestamps: true,
    paranoid: true,
})
export class Typeform extends Model<Typeform> {
    @PrimaryKey
    @Column
    o_typedoc: number;
    
    @Column
    o_typedoc_name: string;

    @HasOne(()=>Form001)
    form001: Form001;
    
}