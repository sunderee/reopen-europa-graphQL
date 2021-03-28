import { UsePipes } from '@nestjs/common';
import { Args, Resolver, Query } from '@nestjs/graphql';
import { CountriesPipe } from 'src/pipes';
import { CountriesService, Direction } from './countries.service';
import { CountryModel } from './models';

@Resolver(of => CountryModel)
export class CountriesResolver {
    constructor(private countriesService: CountriesService) { }

    @Query(returns => [CountryModel])
    @UsePipes(new CountriesPipe())
    public async fetchCountries(@Args('direction') direction: Direction): Promise<Array<CountryModel>> {
        return this.countriesService.fetchCountries(direction);
    }
}