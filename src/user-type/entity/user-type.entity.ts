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

export class User_type extends Model<User_type>{
    @PrimaryKey
    @AutoIncrement
    @Column
    type_id: number

    @Column
    type_title: string
}