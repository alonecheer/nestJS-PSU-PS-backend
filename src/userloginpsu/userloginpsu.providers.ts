import { Userpsu } from "./userloginpsu.entity";


export const userloginpsuProviders = [
  {
    provide: 'Userpsu_REPOSITORY',
    useValue: Userpsu,
  },
];