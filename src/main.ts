import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
    FastifyAdapter,
    NestFastifyApplication
} from '@nestjs/platform-fastify';
import { get } from 'http';
import { AppModule } from './app.module';

function fetchPublicIPv4(): void {
    get(
        { host: 'ipv4bot.whatismyipaddress.com', port: '80', path: '/' },
        (res) =>
            res.on('data', (data) =>
                Logger.log(`Server runs on public IPv4: ${data}`, 'Main')
            )
    );
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
