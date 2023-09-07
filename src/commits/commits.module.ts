import { Module } from '@nestjs/common';
import { CommitsController } from './application/controller/commits.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FindCommitByShaUseCase } from './application/useCase/findCommitBySha.use-case';
import { FindCommitsByBranchUseCase } from './application/useCase/findCommitsByBranch.use-case';
import { GithubService } from 'src/shared/application/service/github.service';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [CommitsController],
  providers: [FindCommitByShaUseCase, FindCommitsByBranchUseCase, GithubService],
})
export class CommitsModule {}
