import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import axios, { AxiosResponse, InternalAxiosRequestConfig, AxiosHeaders } from 'axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { mockCommits } from '../../mocks';
import { GithubService } from '../../../src/github/application/service/github.service';

describe('CommitsService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [
        GithubService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn(() => 'https://api.github.com/repos/GuidoClas/commits-web'),
          },
        }
      ],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAllByBranch', () => {
    it('should return commits by branch', async () => {
      const newConfig: InternalAxiosRequestConfig = {
        headers: new AxiosHeaders()
      };

      const mockResponse: AxiosResponse = {
        data: mockCommits,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: newConfig,
      };

      const mockAxiosGet = jest.spyOn(axios, "get");

      mockAxiosGet.mockImplementation(async () => mockResponse);

      const result = await service.findCommitsByBranch('main');
      expect(result).resolves.toEqual(mockCommits)
    });
  });

  describe('findOneBySha', () => {
    it('should return a commit by sha', async () => {
      const newConfig: InternalAxiosRequestConfig = {
        headers: new AxiosHeaders()
      };

      const mockResponse: AxiosResponse = {
        data: mockCommits[0],
        status: 200,
        statusText: 'OK',
        headers: {},
        config: newConfig,
      };

      const mockAxiosGet = jest.spyOn(axios, "get");

      mockAxiosGet.mockImplementation(async () => mockResponse);

      const result = await service.findCommitBySha('sha');
      expect(result).resolves.toEqual(mockCommits[0])
    });
  });
});
