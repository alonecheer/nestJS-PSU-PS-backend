import { Uploadfile001 } from "./entity/uploadfile001.entity";


export const Uploadfile001Providers = [
  {
    provide: 'uploadfile001Repo',
    useValue: Uploadfile001,
  },
];