/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Resolver, Query } from '@nestjs/graphql';
import { InfoService } from './info.service';
import { InfoModel } from './models';

@Resolver((_of: void) => InfoModel)
export class InfoResolver {
    constructor(private infoService: InfoService) {}

    @Query((_returns: void) => [InfoModel])
    public async fetchInfo(
        @Args('from') from: string,
        @Args('to') to: string,
        @Args('transit') transit?: string
    ): Promise<Array<InfoModel>> {
        return this.infoService.fetchTravelInfoTransit(from, to, transit);
    }
}
