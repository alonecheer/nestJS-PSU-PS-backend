import { Table, Column, Model, PrimaryKey,AutoIncrement } from 'sequelize-typescript';

@Table({})
export class User extends Model<User> {

  @PrimaryKey
  @Column
  sid: string;

  @Column
  password:string;

  @Column
  firstname: string;

  @Column
  lastname: string;

  @Column
  cid: string;
  
}