import { Expose, Type } from 'class-transformer';

export class Branch {
  @Expose({ name: 'name' })
  name: string;
}