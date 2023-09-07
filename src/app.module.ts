import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { BranchesModule } from './branches/branches.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './infrastructure/filters/http-exception.filter';
import { GithubService } from './shared/application/service/github.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [ConfigModule.forRoot(), CommitsModule, BranchesModule, HttpModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    },
    GithubService
  ],
}) 
export class AppModule {}
