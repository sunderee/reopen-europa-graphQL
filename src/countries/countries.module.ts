import { Module } from '@nestjs/common';
import { ApiModule } from 'src/api/api.module';
import { CountriesController } from './countries.controller';
import { CountriesService } from './countries.service';

@Module({
    imports: [ApiModule],
    controllers: [CountriesController],
    providers: [CountriesService]
})
export class CountriesModule {}
