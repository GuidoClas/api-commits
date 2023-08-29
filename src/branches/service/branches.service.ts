import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { map } from 'rxjs';

@Injectable()
export class BranchesService {
  private readonly githubApiUrl: string;

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.githubApiUrl = this.configService.get<string>('GITHUB_API_URL');
  }
  
  findAll() {
    const data = this.httpService.get<any>(`${this.githubApiUrl}/branches`)
    .pipe(
      map(response => response.data)
    );
    
    return data;
  }
}
