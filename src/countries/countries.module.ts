import { Module } from '@nestjs/common';
import { ApiModule } from 'src/api/api.module';
import { CountriesResolver } from './countries.resolver';
import { CountriesService } from './countries.service';

@Module({
    imports: [ApiModule],
    providers: [CountriesService, CountriesResolver]
})
export class CountriesModule {}
