import { Branch } from "src/branches/domain/entities/Branch";
import { CommitResponse } from "src/commits/domain/entities/CommitResponse";

export interface IGithubService {
    findAllBranches(): Promise<Branch[]>
    findCommitsByBranch(branch: string): Promise<CommitResponse[]>
    findCommitBySha(sha: string): Promise<CommitResponse>
}