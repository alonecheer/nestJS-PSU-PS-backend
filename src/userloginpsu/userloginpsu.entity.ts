import {AllowNull,Column,Model,PrimaryKey,Table,AutoIncrement,} from 'sequelize-typescript';
@Table({
    timestamps: true,
    paranoid: true,
})
export class Userpsu extends Model<Userpsu> {
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