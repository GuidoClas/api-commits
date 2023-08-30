import { Test, TestingModule } from '@nestjs/testing';
import { BranchesController } from './branches.controller';
import { BranchesService } from '../service/branches.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { mockBranches } from '../../../test/mocks';
import { first, of, firstValueFrom } from 'rxjs';

describe('BranchesController', () => {
  let controller: BranchesController;
  let service: BranchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule, ConfigModule],
      controllers: [BranchesController],
      providers: [{
        provide: BranchesService,
        useValue: {
          findAll: jest.fn(() => of(mockBranches)),
        },
      }],
    }).compile();

    controller = module.get<BranchesController>(BranchesController);
    service = module.get<BranchesService>(BranchesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of branches', async () => {
      const expectedResult = mockBranches;
      jest.spyOn(service, 'findAll').mockReturnValue(of(expectedResult));

      const result = await controller.findAll();
      await expect(firstValueFrom(result.pipe(first()))).resolves.toEqual(expectedResult);
    });
  });
});
