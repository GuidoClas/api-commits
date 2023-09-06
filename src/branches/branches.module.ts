import { Module } from '@nestjs/common';
import { BranchesService } from './application/service/branches.service';
import { BranchesController } from './application/controller/branches.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [BranchesController],
  providers: [BranchesService],
})
export class BranchesModule {}
