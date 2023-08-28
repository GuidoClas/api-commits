import { Module } from '@nestjs/common';
import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [CommitsModule, ConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
