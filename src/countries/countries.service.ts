import { Injectable } from '@nestjs/common';
import { ApiService } from '../api/api.service';
import { CountryModel } from './models';

export type Direction = 'from' | 'to';

@Injectable()
export class CountriesService {
    constructor(private readonly apiService: ApiService) {}

    async fetchCountries(direction: Direction): Promise<Array<CountryModel>> {
        return (
            (await this.apiService.makeGetRequest<Array<CountryModel>>(
                'https://reopen.europa.eu/api/covid/v1/eutcdata/',
                `countries/en/${direction === 'from' ? 'from' : 'to'}`
            )) ?? []
        );
    }
}
