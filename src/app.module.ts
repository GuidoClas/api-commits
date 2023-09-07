import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { BranchesModule } from './branches/branches.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './infrastructure/filters/http-exception.filter';
import { HttpModule } from '@nestjs/axios';
import { GithubModule } from './github/github.module';

@Module({
  imports: [ConfigModule.forRoot(), GithubModule, CommitsModule, BranchesModule, HttpModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
  ],
}) 
export class AppModule {}
