import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { CountriesPipe } from 'src/pipes';
import { CountriesService, Direction } from './countries.service';
import { CountryModel } from './models';

@Controller('countries')
export class CountriesController {
    constructor(private readonly service: CountriesService) { }

    @Get()
    @UsePipes(new CountriesPipe())
    public async getCountries(
        @Query('direction') queryParams: Direction
    ): Promise<Array<CountryModel>> {
        return this.service.fetchCountries(queryParams);
    }
}
