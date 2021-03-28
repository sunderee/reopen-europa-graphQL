import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { CountriesModule } from './countries/countries.module';

@Module({
    imports: [ApiModule, CountriesModule]
})
export class AppModule {}
