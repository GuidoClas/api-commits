import { Expose } from 'class-transformer';

export class Committer {
  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'email' })
  email: string;

  @Expose({ name: 'date' })
  date: string;
}