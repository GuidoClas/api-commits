import { Module } from '@nestjs/common';
import { CommitsService } from './service/commits.service';
import { CommitsController } from './controller/commits.controller';
import { ConfigModule } from 'src/config/config.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, ConfigModule],
  controllers: [CommitsController],
  providers: [CommitsService],
})
export class CommitsModule {}
