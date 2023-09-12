import { Test, TestingModule } from '@nestjs/testing';
import { BranchesController } from './branches.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { mockBranches } from '../../../../test/mocks';
import { GithubService } from 'src/github/application/service/github.service';

describe('BranchesController', () => {
  let controller: BranchesController;
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [BranchesController],
      providers: [{
        provide: GithubService,
        useValue: {
          findAllBranches: jest.fn(() => mockBranches),
        },
      }],
    }).compile();

    controller = module.get<BranchesController>(BranchesController);
    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of branches', async () => {
      const expectedResult = mockBranches;
      jest.spyOn(service, 'findAllBranches').mockReturnValue(Promise.resolve(expectedResult));

      const result = await controller.findAll();
      await expect(result).resolves.toEqual(expectedResult);
    });
  });
});
