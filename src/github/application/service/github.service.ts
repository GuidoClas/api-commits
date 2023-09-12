import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Branch } from "../../domain/entities/Branch";
import { firstValueFrom } from 'rxjs';
import { AxiosError } from "axios";
import { plainToInstance } from 'class-transformer';
import { IGithubService } from "src/github/domain/service/IGithubService";
import { CommitResponse } from "../../domain/entities/CommitResponse";

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

    const branchesData = data as Record<string, unknown>[];
    const branches: Branch[] = plainToInstance(Branch, branchesData, { strategy: 'excludeAll' });

    return branches;
  }

  async findCommitsByBranch(branch: string): Promise<CommitResponse[]> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.githubApiUrl}/commits?sha=${branch}`))
    .catch((err: AxiosError) => {
        throw err;
    })

    const commitsData = data as Record<string, unknown>[];
    const commits: CommitResponse[] = plainToInstance(CommitResponse, commitsData, { strategy: 'excludeAll', enableImplicitConversion: true });

    return commits;
  }

  async findCommitBySha(sha: string): Promise<CommitResponse> {
    const { data } = await firstValueFrom(this.httpService.get(`${this.githubApiUrl}/commits/${sha}`))
    .catch((err: AxiosError) => {
        throw err;
    })

    const commitData = data as Record<string, unknown>;
    const commit: CommitResponse = plainToInstance(CommitResponse, commitData, { strategy: 'excludeAll', enableImplicitConversion: true });

    return commit;
  }
}