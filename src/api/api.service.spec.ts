import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
    let service: ApiService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ApiService]
        }).compile();

        service = module.get<ApiService>(ApiService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should return countries (to)', async () => {
        const result = await service.fetchCountries('to');
        expect(result.length).toEqual(31);
    });

    it('should return countries (from)', async () => {
        const result = await service.fetchCountries('from');
        expect(result.length).toEqual(36);
    });
});
