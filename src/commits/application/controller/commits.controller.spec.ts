import { Test, TestingModule } from '@nestjs/testing';
import { CommitsController } from './commits.controller';
import { mockCommits } from '../../../../test/mocks';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { of } from 'rxjs/internal/observable/of';
import { ShaDTO } from '../../domain/dto/ShaDTO';
import { GithubService } from '../../../github/application/service/github.service';

describe('CommitsController', () => {
  let controller: CommitsController;
  let service: GithubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [CommitsController],
      providers: [{
        provide: GithubService,
        useValue: {
          findAllByBranch: jest.fn(() => of(mockCommits)),
          findOne: jest.fn(() => of(mockCommits[0])),
        },
      }],
    }).compile();

    controller = module.get<CommitsController>(CommitsController);
    service = module.get<GithubService>(GithubService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findCommitsByBranch', () => {
    it('should return an array of commits by branch', async () => {
      const expectedResult = mockCommits;
      jest.spyOn(service, 'findCommitsByBranch').mockReturnValue(Promise.resolve(expectedResult));

      const result = await controller.findAll("main");
      await expect(result).resolves.toEqual(expectedResult);
    });
  });

  describe('findOneBySha', () => {
    it('should return a commit object by its sha', async () => {
      const expectedResult = mockCommits[0];
      jest.spyOn(service, 'findCommitBySha').mockReturnValue(Promise.resolve(expectedResult));

      const result = await controller.findOne(new ShaDTO());
      await expect(result).resolves.toEqual(expectedResult);
    });
  });

});
