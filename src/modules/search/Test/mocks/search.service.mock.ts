import { NotFoundException } from "@nestjs/common";
import { FilmTypes } from "src/common/interfaces/filmtypes.interface";
import { Actor, ListDirectors } from "src/common/interfaces/fullcast.interface";
import { AppConstantsMock } from "./constants";

export class SearchServiceMock {
    public async searchViking(): Promise<FilmTypes>{
        return Promise.resolve(AppConstantsMock.General.SearchVikingMock);
    }

    public async searchAxe(): Promise<FilmTypes>{
        return Promise.resolve(AppConstantsMock.General.SearchAxeMock);
    }

    public async getDirectors(id:string): Promise<ListDirectors[]>{
        if(id==="tt01"){
            throw new NotFoundException('ID not found'); 
        }
        return Promise.resolve(AppConstantsMock.General.DirectorsMock);
    }

    public async getActors(id:string): Promise<Actor[]>{
        if(id==="tt01"){
            throw new NotFoundException('ID not found'); 
        }
        return Promise.resolve(AppConstantsMock.General.ActorsMock);
    }
}
