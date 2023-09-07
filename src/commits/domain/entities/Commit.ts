import { Expose, Type } from 'class-transformer';
import { Committer } from './Commiter';

export class Commit {
  @Expose({ name: 'sha' })
  sha: string;

  @Expose({ name: 'node_id' })
  node_id: string;

  @Type(() => Committer)
  @Expose({ name: 'committer' })
  committer: Committer;

  @Expose({ name: 'message' })
  message: string;

  @Expose({ name: 'html_url' })
  html_url: string;
}