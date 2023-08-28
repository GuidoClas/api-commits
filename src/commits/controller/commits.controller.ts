import { Controller, Get, Param, ValidationPipe } from '@nestjs/common';
import { CommitsService } from '../service/commits.service';
import { ShaDTO } from '../dto/ShaDTO';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  findAll() {
    return this.commitsService.findAll();
  }

  @Get(':sha')
  findOne(@Param() shaDTO: ShaDTO) {
    return this.commitsService.findOne(shaDTO.sha);
  }

}
