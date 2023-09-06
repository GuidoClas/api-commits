import { Test, TestingModule } from '@nestjs/testing';
import { BranchesService } from './branches.service';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import axios, { AxiosHeaders, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { first, firstValueFrom } from 'rxjs';
import { mockBranches } from '../../../../test/mocks';

describe('BranchesService', () => {
  let service: BranchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      providers: [BranchesService],
    }).compile();

    service = module.get<BranchesService>(BranchesService);
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

      const result = await service.findAll();
      expect(firstValueFrom(result.pipe(first()))).resolves.toEqual(mockBranches)
    });
  });
});
