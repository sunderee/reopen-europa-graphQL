import { Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoResolver } from './info.resolver';

@Module({
    providers: [InfoService, InfoResolver]
})
export class InfoModule {}
