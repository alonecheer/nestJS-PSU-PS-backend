
import { Sequelize } from 'sequelize-typescript';
import { Form001 } from 'src/form001/model/form001.model';
import { User } from 'src/user/user.entity';



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
      sequelize.addModels([Form001,User]);
      await sequelize.sync();
      return sequelize;
    },
  },
];