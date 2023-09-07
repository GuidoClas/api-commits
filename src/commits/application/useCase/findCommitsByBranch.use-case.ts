import { Commit } from "src/commits/domain/entities/Commit";
import { IGithubService } from "src/shared/domain/service/IGithubService";

export class FindCommitsByBranchUseCase {
    constructor(private readonly githubService: IGithubService) {}

    async execute(branch: string): Promise<Commit[]> {
        return await this.githubService.findCommitsByBranch(branch);
    }
}