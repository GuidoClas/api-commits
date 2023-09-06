import { Branch } from "../entities/Branch";

export interface IBranchesService {
    findAll(): Promise<Branch[]>
}