import { Test, TestingModule } from '@nestjs/testing';
import { ImdbAPI } from '../../../common/api-providers/imdb.api';
import { AppConstantsMock } from './mocks/constants';
import { ImdbAPIMock } from './mocks/imdb.api.mock';
import { SearchService } from '../search.service';
import { REQUEST } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { NotFoundException } from '@nestjs/common';

describe('SearchService', () => {
  let service: SearchService;

  beforeAll(async () => {
    const ImdbAPIProvider = {
      provide: ImdbAPI,
      useClass: ImdbAPIMock
    }

    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          envFilePath:['.env.development'],
          isGlobal: true
      })],
      providers: [
        SearchService,
        ImdbAPI
      ]
    })
    .overrideProvider(ImdbAPI)
    .useClass(ImdbAPIMock)
    .overrideProvider(REQUEST)
    .useValue({
      protocol:"http",
      hostname:"localhost"
    })
    .compile();

    service = module.get<SearchService>(SearchService);
  });

  it('[Service] should be defined', () => {
    expect(service).toBeDefined();
  });

  it('[Service] should to get films list with the word viking in the title', async () => {
    expect(await service.searchViking()).toEqual(AppConstantsMock.General.SearchVikingMock);

    service.searchViking();
  });

  it('[Service] should to get films list with the word axe in the title', async () => {
    expect(await service.searchAxe()).toEqual(AppConstantsMock.General.SearchAxeMock);

    service.searchAxe();
  });

  it('[Service] should to get directors list by movie id', async () => {
    expect(await service.getDirectors('tt0052365')).toEqual(AppConstantsMock.General.DirectorsMock);

    service.getDirectors('tt0052365');
  });

  it('[Service] should to get NotFoundException trying to get Actors', async () => {
    expect.assertions(1);
    return service.getDirectors('tt01').catch(err => {
      expect(err).toEqual(new NotFoundException('ID not found'));
    });
  });

  it('[Service] should to get actors list by movie/episode id', async () => {
    expect(await service.getActors('tt0108174')).toEqual(AppConstantsMock.General.ActorsMock);

    service.getActors('tt0108174');
  });

  it('[Service] should to get NotFoundException trying to get Actors', async () => {
    expect.assertions(1);
    return service.getDirectors('tt01').catch(err => {
      expect(err).toEqual(new NotFoundException('ID not found'));
    });
  });
});
