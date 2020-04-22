import { ConfigModule } from '@syukurilexs/nestjs-config';
import { Module, Global } from '@nestjs/common';
import { LoggerService } from './kur-logger.service';
import {
  Transport,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { ConfigService } from '@syukurilexs/nestjs-config';

const microProvider = {
  provide: 'LOGGER',
  useFactory: (configService: ConfigService) => {
    return ClientProxyFactory.create({
      transport: Transport.TCP,
      options: { host: configService.microLoggerHost, port: 3001 },
    });
  },
  inject: [ConfigService],
};

@Global()
@Module({
  imports: [ConfigModule],
  providers: [LoggerService, microProvider],
  exports: [LoggerService, microProvider],
})
export class LoggerModule {}
