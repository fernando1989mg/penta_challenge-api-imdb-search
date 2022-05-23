import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { ImdbAPI } from '../../common/api-providers/imdb.api';
import { HttpModule } from '@nestjs/axios';

@Module({
  providers: [SearchService, ImdbAPI],
  controllers: [SearchController],
  imports: [
    HttpModule,
  ]
})
export class SearchModule {}
