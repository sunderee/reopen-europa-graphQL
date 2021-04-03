import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApiModule } from './api/api.module';
import { CountriesModule } from './countries/countries.module';
import { InfoModule } from './info/info.module';

@Module({
    imports: [
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            debug: true,
            playground: false
        }),
        ApiModule,
        CountriesModule,
        InfoModule
    ]
})
export class AppModule {}
