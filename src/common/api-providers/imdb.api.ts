import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { ReqResAdvanceSearch } from '../interfaces/search.interface';
import { FullCast } from '../interfaces/fullcast.interface';

@Injectable()
export class ImdbAPI {
    readonly endpoint = `${process.env.IMDB_URL}/API`;

    constructor(
      private readonly httpService: HttpService
    ){}

    search = async (query:string) : Promise<ReqResAdvanceSearch> => {
        const url = `${this.endpoint}/AdvancedSearch/${process.env.IMDB_KEY}?${query}`;
        const { data } = await firstValueFrom(this.httpService.get<ReqResAdvanceSearch>(url));
        return data;
    };
    
    getCast = async (id:string) : Promise<FullCast> => {
        const url = `${this.endpoint}/FullCast/${process.env.IMDB_KEY}/${id}`;
        const { data } = await firstValueFrom(this.httpService.get<FullCast>(url));
        return data;
    };
}

