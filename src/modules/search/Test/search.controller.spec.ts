import { Test, TestingModule } from '@nestjs/testing';
import { SearchVikingMock, DirectorsMock, ActorsMock, SearchAxeMock } from './mocks/const.mock';
import { SearchServiceMock } from './mocks/search.service.mock';
import { SearchController } from '../search.controller';
import { SearchService } from '../search.service';
import { NotFoundException } from '@nestjs/common';

describe('SearchController', () => {
  let controller: SearchController;

  beforeAll(async () => {
    const SearchServiceProvider = {
      provide: SearchService,
      useClass: SearchServiceMock
    }

    const module: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchService, SearchServiceProvider]
    })
    .overrideProvider(SearchService)
    .useClass(SearchServiceMock)
    .compile();

    controller = module.get<SearchController>(SearchController);
  });

  it('[Controller] should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('[Controller] should to get films list with the word viking in the title', async () => {
    expect(await controller.searchViking()).toEqual(SearchVikingMock);

    controller.searchViking();
  });

  it('[Controller] should to get films list with the word axe in the title', async () => {
    expect(await controller.searchAxe()).toEqual(SearchAxeMock);

    controller.searchAxe();
  });

  it('[Controller] should to get directos list by movie id', async () => {
    expect(await controller.getDirectors('tt0052365')).toEqual(DirectorsMock);

    controller.getDirectors('tt0052365');
  });

  it('[Controller] should to get NotFoundException trying to get Actors', async () => {
    expect.assertions(1);
    return controller.getDirectors('tt01').catch(err => {
      expect(err).toEqual(new NotFoundException('ID not found'));
    });
  });

  it('[Controller] should to get actors list by movie/episode id', async () => {
    expect(await controller.getActors('tt0108174')).toEqual(ActorsMock);

    controller.getActors('tt0108174');
  });

  it('[Controller] should to get NotFoundException trying to get Actors', async () => {
    expect.assertions(1);
    return controller.getActors('tt01').catch(err => {
      expect(err).toEqual(new NotFoundException('ID not found'));
    });
  });
});
