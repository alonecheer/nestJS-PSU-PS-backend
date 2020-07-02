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
import { User } from 'src/users/entity/users.entity'
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

    // !------------------------ Relation to Table User ------------------------! //
    @HasOne( () => User)
    user: User;
    // !------------------------ end ------------------------! //
}