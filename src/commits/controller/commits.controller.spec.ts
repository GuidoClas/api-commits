import { Test, TestingModule } from '@nestjs/testing';
import { CommitsController } from './commits.controller';
import { CommitsService } from '../service/commits.service';
import { mockCommits } from '../../../test/mocks';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { of } from 'rxjs/internal/observable/of';
import { first, firstValueFrom } from 'rxjs';
import { ShaDTO } from '../dto/ShaDTO';

describe('CommitsController', () => {
  let controller: CommitsController;
  let service: CommitsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [CommitsController],
      providers: [{
        provide: CommitsService,
        useValue: {
          findAllByBranch: jest.fn(() => of(mockCommits)),
          findOne: jest.fn(() => of(mockCommits[0])),
        },
      }],
    }).compile();

    controller = module.get<CommitsController>(CommitsController);
    service = module.get<CommitsService>(CommitsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAllByBranch', () => {
    it('should return an array of commits by branch', async () => {
      const expectedResult = mockCommits;
      jest.spyOn(service, 'findAllByBranch').mockReturnValue(of(expectedResult));

      const result = await controller.findAll("main");
      await expect(firstValueFrom(result.pipe(first()))).resolves.toEqual(expectedResult);
    });
  });

  describe('findOneBySha', () => {
    it('should return a commit object by its sha', async () => {
      const expectedResult = mockCommits[0];
      jest.spyOn(service, 'findOne').mockReturnValue(of(expectedResult));

      const result = await controller.findOne(new ShaDTO());
      await expect(firstValueFrom(result.pipe(first()))).resolves.toEqual(expectedResult);
    });
  });

});
