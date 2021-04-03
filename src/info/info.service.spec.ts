import { Test, TestingModule } from '@nestjs/testing';
import { ApiService } from '../api/api.service';
import { InfoService } from './info.service';

describe('InfoService', () => {
    let service: InfoService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [InfoService, ApiService]
        }).compile();

        service = module.get<InfoService>(InfoService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    it('should fetch data for SVN - ESP', async () => {
        const data = await service.fetchTravelInfoWithoutTransit('SVN', 'ESP');
        expect(data?.length).toEqual(2);
    });
});
