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

    
}