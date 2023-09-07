import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubService } from './application/service/github.service';

@Module({
    imports: [HttpModule, ConfigModule],
    controllers: [],
    providers: [{
        provide: 'IGithubService',
        useClass: GithubService
    }],
    exports: ['IGithubService']
})
export class GithubModule { }
