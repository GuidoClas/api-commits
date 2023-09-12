import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { GithubService } from '../../../src/github/application/service/github.service';
import axios, { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { mockBranches } from '../../mocks';

describe('BranchesService', () => {
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [GithubService],
    }).compile();

    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return all branches', async () => {
      const newConfig: InternalAxiosRequestConfig = {
        headers: new AxiosHeaders()
      };

      const mockResponse: AxiosResponse = {
        data: mockBranches,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: newConfig,
      };

      const mockAxiosGet = jest.spyOn(axios, "get");

      mockAxiosGet.mockImplementation(async () => mockResponse);

      const result = await service.findAllBranches();
      expect(result).resolves.toEqual(mockBranches)
    });
  });
});
