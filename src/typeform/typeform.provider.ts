import { Typeform } from "./entity/typeform.entity";

export const TypeformProviders = [
  {
    provide: 'typefomrRepo',
    useValue: Typeform,
  },
];