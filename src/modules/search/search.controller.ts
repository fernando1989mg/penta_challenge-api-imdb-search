import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';
import { Actor, ListDirectors } from 'src/common/interfaces/fullcast.interface';
import { FilmTypes } from 'src/common/interfaces/filmtypes.interface';

@Controller('imdb')
export class SearchController {

    constructor(private readonly searchService: SearchService){}

    @Get('viking')
    searchViking(): Promise<FilmTypes>{
        return this.searchService.searchViking();
    } 

    @Get('axe')
    searchAxe(): Promise<FilmTypes>{
        return this.searchService.searchAxe();
    }

    @Get('viking/:id/directors')
    getDirectors(@Param('id') id:string): Promise<ListDirectors[]>{
        return this.searchService.getDirectors(id)
    }

    @Get('axe/:id/actors')
    getActors(@Param('id') id:string): Promise<Actor[]>{
        return this.searchService.getActors(id)
    }
}
