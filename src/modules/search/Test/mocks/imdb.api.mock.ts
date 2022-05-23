import { NotFoundException } from '@nestjs/common';
import { FullCast } from 'src/common/interfaces/fullcast.interface';
import { ReqResAdvanceSearch } from 'src/common/interfaces/search.interface';
import {AppConstantsMock} from './constants';

export class ImdbAPIMock {
    public async search(query:string) : Promise<ReqResAdvanceSearch> {
        if(query.includes("viking") && query.includes("Movie")){

            return AppConstantsMock.General.ReqResAdvanceSearchMockVikingMovie;
        }else if(query.includes("axe") && query.includes("Movie")){

            return AppConstantsMock.General.ReqResAdvanceSearchMockAxeMovie;
        }else if(query.includes("viking") && query.includes("Episode")){

            return AppConstantsMock.General.ReqResAdvanceSearchMockVikingEpisode;
        }else if(query.includes("axe") && query.includes("Episode")){

            return AppConstantsMock.General.ReqResAdvanceSearchMockAxeEpisode;
        }
    };
    
    public async getCast(id:string) : Promise<FullCast> {
        if(id==="tt01"){
            throw new NotFoundException('ID not found'); 
        }
        return AppConstantsMock.General.FullCastMock;
    };
}