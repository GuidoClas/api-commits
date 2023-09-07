import { Module } from '@nestjs/common';
import { BranchesController } from './application/controller/branches.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { FindAllBranchesUseCase } from './application/useCase/findAllBranchesUseCase';
import { GithubModule } from 'src/github/github.module';

@Module({
  imports: [HttpModule, ConfigModule, GithubModule],
  controllers: [BranchesController],
  providers: [
    FindAllBranchesUseCase
  ],
})
export class BranchesModule {}
