import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoResolver } from './info.resolver';
import { ApiModule } from '../api/api.module';

@Module({
    imports: [ApiModule],
    providers: [InfoService, InfoResolver]
})
export class InfoModule {}
