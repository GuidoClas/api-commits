import { Inject } from "@nestjs/common";
import { Branch } from "../../../github/domain/entities/Branch";
import { IGithubService } from "src/github/domain/service/IGithubService";

export class FindAllBranchesUseCase {
    constructor(
        @Inject('IGithubService')
        private readonly githubService: IGithubService
    ) {}

    async execute(): Promise<Branch[]> {
        return await this.githubService.findAllBranches();
    }
}