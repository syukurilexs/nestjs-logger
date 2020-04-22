import { Injectable, Scope, Logger, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { IInput } from './interfaces/input.interface';
import { ConfigService } from '@syukurilexs/nestjs-config';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggerService extends Logger {
  private logsource = 'logging-syukur';
  private appName = 'syukurApp';

  constructor(
    @Inject('LOGGER') private readonly client: ClientProxy,
    private readonly configSvc: ConfigService,
  ) {
    super();
    this.logsource = configSvc.logSource;
    this.appName = configSvc.appName;
  }

  log(message: string | object) {
    let msg: {[key: string]: any};
    if (message instanceof Object) {
      msg = message;
    } else {
      msg = {message};
    }

    const msgObj: IInput = {
      logsource: this.logsource,
      appname: this.appName,
      body: msg,
    };

    msgObj.body.context = this.context;

    this.client.emit('log', msgObj);
    super.log(message);
  }

  error(message: string | object, trace: string) {
    let msg: {[key: string]: any};
    if (message instanceof Object) {
      msg = message;
    } else {
      msg = {message};
    }

    const msgObj: IInput = {
      logsource: this.logsource,
      appname: this.appName,
      body: msg,
    };

    msgObj.body.context = this.context;
    msgObj.body.trace = trace;

    this.client.emit('error', msgObj);
    super.error(message, trace);
  }

  warn(message: string | object) {
    let msg: {[key: string]: any};
    if (message instanceof Object) {
      msg = message;
    } else {
      msg = {message};
    }

    const msgObj: IInput = {
      logsource: this.logsource,
      appname: this.appName,
      body: msg,
    };

    msgObj.body.context = this.context;

    this.client.emit('warn', msgObj);
    super.warn(message);
  }
}
