import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { BranchesModule } from './branches/branches.module';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './middleware/http-exception.filter';


@Module({
  imports: [ConfigModule.forRoot(), CommitsModule, BranchesModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule {}
