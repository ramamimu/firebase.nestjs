import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllData() {
    return this.appService.getAllData();
  }

  @Get(':id')
  getData(@Param('id') id: string) {
    return this.appService.getData(id);
  }

  @Post()
  insertData(@Body('total') total: number) {
    return this.appService.insertData(total);
  }

  @Put(':id')
  updateData(@Param('id') id: string, @Body('total') total: number) {
    return this.appService.updateData(id, total);
  }

  @Delete(':id')
  deleteData(@Param('id') id: string) {
    return this.appService.deleteData(id);
  }

  @Get('test')
  getTest() {
    return this.appService.getTest();
  }
}
