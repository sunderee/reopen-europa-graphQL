/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Resolver, Query } from '@nestjs/graphql';
import { CountriesService, Direction } from './countries.service';
import { CountryModel } from './models';

@Resolver((_of: void) => CountryModel)
export class CountriesResolver {
    constructor(private countriesService: CountriesService) {}

    @Query((_returns: void) => [CountryModel])
    public async fetchCountries(
        @Args('direction') direction: Direction
    ): Promise<Array<CountryModel>> {
        return this.countriesService.fetchCountries(direction);
    }
}
