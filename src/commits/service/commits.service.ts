import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ConfigService } from 'src/config/service/config.service';

@Injectable()
export class CommitsService {
  private readonly githubApiUrl: string;

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.githubApiUrl = this.configService.getGithubApiUrl();
  }

  findAll(): Observable<any> {
    const data = this.httpService.get<any>(this.githubApiUrl)
    .pipe(
      map(response => response.data)
    );
    
    return data;
  }

  findOne(sha: string) {
    const data = this.httpService.get<any>(`${this.githubApiUrl}/${sha}`)
    .pipe(
      map(response => response.data)
    );

    return data;
  }
}
