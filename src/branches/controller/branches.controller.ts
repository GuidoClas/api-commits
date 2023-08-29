import { Controller, Get } from '@nestjs/common';
import { BranchesService } from '../service/branches.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('branches')
@ApiTags('Branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Get()
  findAll() {
    return this.branchesService.findAll();
  }

}
