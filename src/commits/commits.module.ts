import { Module } from '@nestjs/common';
import { CommitsService } from './service/commits.service';
import { CommitsController } from './controller/commits.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
