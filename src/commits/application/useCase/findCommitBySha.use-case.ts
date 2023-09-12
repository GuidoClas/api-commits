import { Inject } from "@nestjs/common";
import { CommitResponse } from "../../../github/domain/entities/CommitResponse";
import { IGithubService } from "src/github/domain/service/IGithubService";

export class FindCommitByShaUseCase {
    constructor(@Inject('IGithubService') private readonly githubService: IGithubService) {}
    
    async execute(sha: string): Promise<CommitResponse> {
        return await this.githubService.findCommitBySha(sha);
    }
}