import { Status_form001 } from "./entity/status-form001.entity";

export const Status_Form001Providers = [
  {
    provide: 'status_form001Repo',
    useValue: Status_form001,
  },
];