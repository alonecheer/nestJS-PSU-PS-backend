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
    timestamps: false,
    paranoid: false,
})
export class Typeform extends Model<Typeform> {
    @PrimaryKey
    @Column
    o_typedoc: number;
    
    @Column
    o_typedoc_name: string;

    
}