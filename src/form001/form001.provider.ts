import { Form001 } from "./model/form001.model";


export const Form001Providers = [
  {
    provide: 'form001Repo',
    useValue: Form001,
  },
];