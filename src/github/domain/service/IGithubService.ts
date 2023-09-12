import { Branch } from "../../domain/entities/Branch";
import { CommitResponse } from "../../domain/entities/CommitResponse";

export interface IGithubService {
    findAllBranches(): Promise<Branch[]>
    findCommitsByBranch(branch: string): Promise<CommitResponse[]>
    findCommitBySha(sha: string): Promise<CommitResponse>
}