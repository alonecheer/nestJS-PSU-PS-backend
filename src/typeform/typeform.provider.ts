import { Typeform } from "./entity/typeform.entity";


export const TypeformProviders = [
  {
    provide: 'typeformRepo',
    useValue: Typeform,
  },
];