import { Expose, Type } from 'class-transformer';
import { Committer } from './Commiter';

export class Commit {
  @Type(() => Committer)
  @Expose({ name: 'committer' })
  committer: Committer;

  
  @Expose({ name: 'message' })
  message: string;
}