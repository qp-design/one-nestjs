import { Injectable } from '@nestjs/common';
import { UserInterface } from './app.interface';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  fetchData(id: number): UserInterface {
    return {
      name: `devil${id}`,
      des: '第一个nestjs应用！',
      time: new Date().valueOf(),
    };
  }
  returnBody(body?: UserInterface): UserInterface {
    return body
  }
}
