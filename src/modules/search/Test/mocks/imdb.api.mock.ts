import { NotFoundException } from '@nestjs/common';
import { FullCast } from 'src/common/interfaces/fullcast.interface';
import { ReqResAdvanceSearch } from 'src/common/interfaces/search.interface';
import {FullCastMock, ReqResAdvanceSearchMockVikingMovie, ReqResAdvanceSearchMockAxeMovie, ReqResAdvanceSearchMockVikingEpisode, ReqResAdvanceSearchMockAxeEpisode} from './const.mock';

export class ImdbAPIMock {
    public async search(query:string) : Promise<ReqResAdvanceSearch> {
        if(query.includes("viking") && query.includes("Movie")){

            return ReqResAdvanceSearchMockVikingMovie;
        }else if(query.includes("axe") && query.includes("Movie")){

            return ReqResAdvanceSearchMockAxeMovie;
        }else if(query.includes("viking") && query.includes("Episode")){

            return ReqResAdvanceSearchMockVikingEpisode;
        }else if(query.includes("axe") && query.includes("Episode")){

            return ReqResAdvanceSearchMockAxeEpisode;
        }
    };
    
    public async getCast(id:string) : Promise<FullCast> {
        if(id==="tt01"){
            throw new NotFoundException('ID not found'); 
        }
        return FullCastMock;
    };
}