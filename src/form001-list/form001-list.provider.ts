import { Form001_List } from "./entity/form001-list.entity";

export const Form001_ListProviders = [
  {
    provide: 'form001_listRepo',
    useValue: Form001_List,
  },
];