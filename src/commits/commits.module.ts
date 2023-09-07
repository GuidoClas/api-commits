import { Module } from '@nestjs/common';
import { CommitsController } from './application/controller/commits.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { FindCommitByShaUseCase } from './application/useCase/findCommitBySha.use-case';
import { FindCommitsByBranchUseCase } from './application/useCase/findCommitsByBranch.use-case';
import { GithubModule } from 'src/github/github.module';

@Module({
  imports: [HttpModule, ConfigModule, GithubModule],
  controllers: [CommitsController],
  providers: [FindCommitByShaUseCase, FindCommitsByBranchUseCase],
})
export class CommitsModule { }
