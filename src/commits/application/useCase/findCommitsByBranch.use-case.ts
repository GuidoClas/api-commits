import { Inject } from "@nestjs/common";
import { CommitResponse } from "src/commits/domain/entities/CommitResponse";
import { IGithubService } from "src/github/domain/service/IGithubService";

export class FindCommitsByBranchUseCase {
    constructor(@Inject('IGithubService') private readonly githubService: IGithubService) {}

    async execute(branch: string): Promise<CommitResponse[]> {
        return await this.githubService.findCommitsByBranch(branch);
    }
}