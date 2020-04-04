import {AllowNull,Column,Model,PrimaryKey,Table,AutoIncrement,} from 'sequelize-typescript';
@Table({
    timestamps: true,
    paranoid: true,
})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  sid: string;

  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  cid: string;

}