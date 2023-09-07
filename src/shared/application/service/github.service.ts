import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Branch } from "src/branches/domain/entities/Branch";
import { IGithubService } from "src/shared/domain/service/IGithubService";
import { firstValueFrom } from 'rxjs';
import { AxiosError } from "axios";
import { plainToInstance } from 'class-transformer';
import { Commit } from "src/commits/domain/entities/Commit";

@Injectable()
export class GithubService implements IGithubService {
  private readonly githubApiUrl: string;

  constructor(private readonly configService: ConfigService, private readonly httpService: HttpService) {
    this.githubApiUrl = this.configService.get<string>('GITHUB_API_URL');
  }
  
  async findAllBranches(): Promise<Branch[]> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.githubApiUrl}/branches`))
    .catch((err: AxiosError) => {
        throw err;
    })

    const branches: Branch[] = plainToInstance(Branch, data as Record<string, unknown>[]);
    return branches;
  }

  async findCommitsByBranch(branch: string): Promise<Commit[]> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.githubApiUrl}/commits?sha=${branch}`))
    .catch((err: AxiosError) => {
        throw err;
    })

    const commits: Commit[] = plainToInstance(Commit, data as Record<string, unknown>[]);
    return commits;
  }

  async findCommitBySha(sha: string): Promise<Commit> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.githubApiUrl}/commits/${sha}`))
    .catch((err: AxiosError) => {
        throw err;
    })

    const commit: Commit = plainToInstance(Commit, data);
    return commit;
  }
}