import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FindAllBranchesUseCase } from '../useCase/findAllBranchesUseCase';
import { Branch } from 'src/branches/domain/entities/Branch';

@Controller('branches')
@ApiTags('Branches')
export class BranchesController {
  constructor(private readonly findAllBranchesUseCase: FindAllBranchesUseCase) {}

  @Get()
  async findAll(): Promise<Branch[]> {
    return this.findAllBranchesUseCase.execute();
  }

}
