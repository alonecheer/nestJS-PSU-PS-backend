import { User_type } from "./entity/user-type.entity";


export const User_typeProviders = [
  {
    provide: 'user_typeRepo',
    useValue: User_type,
  },
];