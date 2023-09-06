import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { Branch } from 'src/branches/domain/entities/Branch';
import { IBranchesService } from 'src/branches/domain/service/IBranchesService';

@Injectable()
export class BranchesService implements IBranchesService {
  private readonly githubApiUrl: string;

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.githubApiUrl = this.configService.get<string>('GITHUB_API_URL');
  }
  
  async findAll(): Promise<Branch[]> {
    const { data } = await firstValueFrom(this.httpService.get<any>(`${this.githubApiUrl}/branches`))

    return data;
  }
}
