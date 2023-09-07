import { Branch } from "src/branches/domain/entities/Branch";
import { IGithubService } from "src/shared/domain/service/IGithubService";

export class FindAllBranchesUseCase {
    constructor(private readonly githubService: IGithubService) {}

    async execute(): Promise<Branch[]> {
        return await this.githubService.findAllBranches();
    }
}