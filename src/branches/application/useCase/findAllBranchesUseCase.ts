import { Branch } from "src/branches/domain/entities/Branch";
import { IBranchesService } from "src/branches/domain/service/IBranchesService";

export class FindAllBranchesUseCase {
    constructor(private readonly branchesService: IBranchesService) {}

    async execute(): Promise<Branch[]> {
        return await this.branchesService.findAll();
    }
}