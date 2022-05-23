import { BadRequestException, Injectable } from '@nestjs/common';
import { ReqResAdvanceSearch, Film } from '../../common/interfaces/search.interface';
import { ImdbAPI } from '../../common/api-providers/imdb.api';
import { Actor, ListDirectors } from 'src/common/interfaces/fullcast.interface';
import { Request } from 'express';
import { Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { FilmTypes } from 'src/common/interfaces/filmtypes.interface';
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class SearchService {

    constructor(
        private readonly imdbAPI: ImdbAPI,
        @Inject(REQUEST) private request: Request
    ){}

    public async searchViking(): Promise<FilmTypes>{
        return this.search('viking','Directors');
    }

    public async searchAxe(): Promise<FilmTypes>{
        return this.search('axe','Actors');
    }

    private async search(title:string, linkType:'Directors' | 'Actors'): Promise<FilmTypes>{
        //   hacemos dos llamadas a la api para poder identificar cuales son
        //   peliculas y cuales son episodios, si dejamos todo en una llamada
        //   no se pueden identificar
        
        return Promise.all([
            this.imdbAPI.search(`title=${title}&title_type=Movie`), 
            this.imdbAPI.search(`title=${title}&title_type=Episode`)
          ]).then( responses => {
                let movies:ReqResAdvanceSearch = responses[0];
                let episodes:ReqResAdvanceSearch = responses[1];

                let movieList:Film[] = movies.results.map(({id,...rest}) => ({
                    id,
                    ...rest, 
                    [`link${linkType}`]: `${this.request.protocol}://${this.request.hostname}:${process.env.PORT}/imdb/${title}/${id}/${linkType.toLocaleLowerCase()}`
                }));

                let episodesList:Film[] = episodes.results.map(({id,...rest}) => ({
                    id,
                    ...rest, 
                    [`link${linkType}`]: `${this.request.protocol}://${this.request.hostname}:${process.env.PORT}/imdb/${title}/${id}/${linkType.toLocaleLowerCase()}`
                }));

                return {
                    movies: movieList,
                    episodes: episodesList
                };
            }
          );
    }

    public async getDirectors(id:string): Promise<ListDirectors[]>{
        return await this.imdbAPI.getCast(id).then(({directors}) => {
            if(directors === null){
                throw new NotFoundException('ID not found'); 
            }
            return directors.items;
        });
    }

    public async getActors(id:string): Promise<Actor[]>{
        return await this.imdbAPI.getCast(id).then(({actors}) => {
            if(actors === null){
                throw new NotFoundException('ID not found'); 
            }
            return actors;
        });
    }
}
