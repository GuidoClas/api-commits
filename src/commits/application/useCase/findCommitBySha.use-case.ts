import { Commit } from "src/commits/domain/entities/Commit";
import { IGithubService } from "src/shared/domain/service/IGithubService";

export class FindCommitByShaUseCase {
    constructor(private readonly githubService: IGithubService) {}
    
    async execute(sha: string): Promise<Commit> {
        return await this.githubService.findCommitBySha(sha);
    }
}