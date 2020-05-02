import { Table, Column, Model, PrimaryKey,AutoIncrement,HasMany,ForeignKey  } from 'sequelize-typescript';
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
  
}

