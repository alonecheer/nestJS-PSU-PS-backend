
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entity/users.entity';
import { Form001 } from 'src/form001/entity/forms.entity';
import { Typeform } from 'src/typeform/entity/typeform.entity'
import { Status_form001 } from 'src/status-form001/entity/status-form001.entity'
import { Form001_List } from 'src/form001-list/entity/form001-list.entity';
import { Uploadfile001 } from 'src/uploadfile001/entity/uploadfile001.entity';
export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '0123456',
        database: 'nest-jwt',
      });
      sequelize.addModels([Form001,User,Typeform,Status_form001,Form001_List,Uploadfile001]);
      await sequelize.sync();
      return sequelize;
    },
  },
];