
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/users/entity/users.entity';
import { Form001 } from 'src/form001/entity/forms.entity';
import { Typeform } from 'src/typeform/entity/typeform.entity'


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
      sequelize.addModels([Form001,User,Typeform]);
      await sequelize.sync();
      return sequelize;
    },
  },
];