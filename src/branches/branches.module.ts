import { Module } from '@nestjs/common';
import { BranchesController } from './application/controller/branches.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GithubService } from 'src/shared/application/service/github.service';
import { FindAllBranchesUseCase } from './application/useCase/findAllBranchesUseCase';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [BranchesController],
  providers: [FindAllBranchesUseCase,
    {
      provide: 'IGithubService',
      useClass: GithubService
    }
  ],
})
export class BranchesModule {}
