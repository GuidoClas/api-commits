import { Controller, Get, Param } from '@nestjs/common';
import { CommitsService } from '../service/commits.service';
import { ShaDTO } from '../dto/ShaDTO';
import { ApiTags } from '@nestjs/swagger';


@Controller('commits')
@ApiTags('Commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get('/branch/:branch')
  findAll(@Param('branch') branch: string) {
    return this.commitsService.findAllByBranch(branch);
  }

  @Get(':sha')
  findOne(@Param() shaDTO: ShaDTO) {
    return this.commitsService.findOne(shaDTO.sha);
  }

}
