import { Module } from '@nestjs/common';
import { BranchesService } from './service/branches.service';
import { BranchesController } from './controller/branches.controller';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [BranchesController],
  providers: [BranchesService],
})
export class BranchesModule {}
