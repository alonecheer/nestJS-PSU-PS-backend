import { Table, Column, Model,BelongsTo, PrimaryKey,AutoIncrement,HasMany,ForeignKey ,HasOne } from 'sequelize-typescript';
import { Form001 } from 'src/form001/entity/forms.entity';
import { Form001_List } from 'src/form001-list/entity/form001-list.entity';
import { User_type } from 'src/user-type/entity/user-type.entity'
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

  // !------------------------ Relation to Table Form001 ------------------------! //
  @HasOne(()=>Form001)
  form001: Form001;
  // !------------------------ end ------------------------! //

  // !------------------------ Relation to Table User_type ------------------------! //
  // !------------------------ type_id เป็น foreignKey ------------------------! //

  @ForeignKey(() => User_type )
  type_id: number;
  @BelongsTo(()=> User_type)
    typeform: User_type;
  // !------------------------ end ------------------------! //
}

