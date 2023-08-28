import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly githubApiUrl: string;

  constructor() {
    this.githubApiUrl = process.env.GITHUB_API_URL || 'https://api.github.com/repos/GuidoClas/commits-web/commits';
  }

  getGithubApiUrl(): string {
    return this.githubApiUrl;
  }
}
