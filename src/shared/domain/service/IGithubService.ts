import { Branch } from "src/branches/domain/entities/Branch";
import { Commit } from "src/commits/domain/entities/Commit";

export interface IGithubService {
    findAllBranches(): Promise<Branch[]>
    findCommitsByBranch(branch: string): Promise<Commit[]>
    findCommitBySha(sha: string): Promise<Commit>
}