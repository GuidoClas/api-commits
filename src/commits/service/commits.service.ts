import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AxiosError } from 'axios';
import { Observable, map, catchError, throwError } from 'rxjs';

@Injectable()
export class CommitsService {
  private readonly githubApiUrl: string;

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.githubApiUrl = this.configService.get<string>('GITHUB_API_URL');
  }

  findAllByBranch(branch: string): Observable<any> {
    const data = this.httpService.get<any>(`${this.githubApiUrl}/commits?sha=${branch}`)
    .pipe(
      catchError((error: AxiosError) => {
        throw error;
      }),
      map(response => response.data)
    );
    
    return data;
  }

  findOne(sha: string): Observable<any> {
    const data = this.httpService.get<any>(`${this.githubApiUrl}/commits/${sha}`)
    .pipe(
      map(response => response.data)
    );

    return data;
  }
}
