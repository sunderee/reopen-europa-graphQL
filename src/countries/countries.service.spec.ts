import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from '../api/api.service';
import { CountriesService } from './countries.service';

describe('CountriesService', () => {
    let service: CountriesService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CountriesService, ApiService]
        }).compile();

        service = module.get<CountriesService>(CountriesService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should fetch countries (to)', async () => {
        const result = await service.fetchCountries('to');
        expect(result.length).toEqual(31);
    });

    it('should fetch countries (from)', async () => {
        const result = await service.fetchCountries('from');
        expect(result.length).toEqual(36);
    });
});
