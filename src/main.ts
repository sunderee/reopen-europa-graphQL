import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify';
import { ApiProvider } from './api/api.provider';
import { AppModule } from './app.module';

async function fetchPublicIPv4(): Promise<void> {
    const ip = await ApiProvider.getInstance(
        'ipv4bot.whatismyipaddress.com'
    ).makeGetRequest<string>('text');
    Logger.log('main', `Server is running from public IP ${ip}`);
}

async function bootstrap() {
    fetchPublicIPv4();
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter()
    );
    app.enableCors();
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
