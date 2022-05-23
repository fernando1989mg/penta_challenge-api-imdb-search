import { NotFoundException } from "@nestjs/common";
import { FilmTypes } from "src/common/interfaces/filmtypes.interface";
import { Actor, ListDirectors } from "src/common/interfaces/fullcast.interface";
import { ActorsMock, DirectorsMock, SearchAxeMock, SearchVikingMock } from "./const.mock";

export class SearchServiceMock {
    public async searchViking(): Promise<FilmTypes>{
        return Promise.resolve(SearchVikingMock);
    }

    public async searchAxe(): Promise<FilmTypes>{
        return Promise.resolve(SearchAxeMock);
    }

    public async getDirectors(id:string): Promise<ListDirectors[]>{
        if(id==="tt01"){
            throw new NotFoundException('ID not found'); 
        }
        return Promise.resolve(DirectorsMock);
    }

    public async getActors(id:string): Promise<Actor[]>{
        if(id==="tt01"){
            throw new NotFoundException('ID not found'); 
        }
        return Promise.resolve(ActorsMock);
    }
}
