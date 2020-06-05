import { Uploadfile001 } from "./entity/uploadfile001.entity";


export const TypeformProviders = [
  {
    provide: 'uploadfile001Repo',
    useValue: Uploadfile001,
  },
];