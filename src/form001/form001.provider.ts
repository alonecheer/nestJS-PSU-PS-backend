import { Form001 } from "./entity/forms.entity";

export const Form001Providers = [
  {
    provide: 'form001Repo',
    useValue: Form001,
  },
];