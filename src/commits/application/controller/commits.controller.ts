import { Controller, Get, Param } from '@nestjs/common';
import { ShaDTO } from '../../domain/dto/ShaDTO';
import { ApiTags } from '@nestjs/swagger';
import { FindCommitsByBranchUseCase } from '../useCase/findCommitsByBranch.use-case';
import { FindCommitByShaUseCase } from '../useCase/findCommitBySha.use-case';


@Controller('commits')
@ApiTags('Commits')
export class CommitsController {
  constructor(private readonly findCommitsByBranch: FindCommitsByBranchUseCase, private readonly findCommitBySha: FindCommitByShaUseCase) {}

  @Get('/branch/:branch')
  findAll(@Param('branch') branch: string) {
    return this.findCommitsByBranch.execute(branch);
  }

  @Get(':sha')
  findOne(@Param() shaDTO: ShaDTO) {
    return this.findCommitBySha.execute(shaDTO.sha);
  }

}
