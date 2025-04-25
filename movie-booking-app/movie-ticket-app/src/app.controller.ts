import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ICreateTheaterDto } from './data.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('theater')
  createTheater(@Body() data: ICreateTheaterDto) {
    try {
      console.log(data);
      return this.appService.createTheater(data);
    } catch (e) {
      console.log(e.message);
    }
  }
}
