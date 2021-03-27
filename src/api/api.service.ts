import { Injectable } from '@nestjs/common';
import { ApiProvider } from './api.provider';
import { CountryModel } from './models';

export type Direction = 'from' | 'to';

@Injectable()
export class ApiService {
    private readonly provider = ApiProvider.getInstance(
        'https://reopen.europa.eu/api/covid/v1/eutcdata/'
    )

    public async fetchCountries(
        direction: Direction
    ): Promise<Array<CountryModel>> {
        return (
            (await this.provider.makeGetRequest<Array<CountryModel>>(
                'json',
                `countries/en/${direction === 'from' ? 'from' : 'to'}`
            )) ?? []
        );
    }
}
