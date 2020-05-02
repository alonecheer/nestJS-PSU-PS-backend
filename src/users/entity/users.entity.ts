import { Table, Column, Model, PrimaryKey,AutoIncrement,HasMany,ForeignKey ,HasOne } from 'sequelize-typescript';
import { Form001 } from 'src/form001/entity/forms.entity';


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

  @HasOne(()=>Form001)
  form001: Form001;
  
}

