/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Resolver, Query } from '@nestjs/graphql';
import { InfoService } from './info.service';
import { InfoModel, InfoRequestModel } from './models';

@Resolver((_of: void) => InfoModel)
export class InfoResolver {
    constructor(private infoService: InfoService) {}

    @Query((_returns: void) => [InfoModel])
    async fetchInfo(@Args() data: InfoRequestModel): Promise<Array<InfoModel>> {
        return this.infoService.fetchTravelInfoTransit(data.from, data.to, data.transit);
    }
}
