import { Expose, Type } from 'class-transformer';
import { Commit } from './Commit';

export class CommitResponse {
  @Expose({ name: 'sha' })
  sha: string;

  @Expose({ name: 'node_id' })
  node_id: string;

  @Type(() => Commit)
  @Expose({ name: 'commit' })
  commit: Commit;

  @Expose({ name: 'message' })
  message: string;

  @Expose({ name: 'html_url' })
  html_url: string;
}