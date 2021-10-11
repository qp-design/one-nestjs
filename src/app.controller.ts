import { Body, Controller, Get, Param, Post, Query, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { idDto, QueryUserDto, UserDto } from './app.dto';
import { JoiValidationPipe } from './utils/pipes/projectSchema';
import { ParseIntPipe } from './utils/pipes/parse-int.pipe';
import { ValidationPipe } from './utils/pipes/validate.pipe';
import { User } from './utils/decorator/user.decorator';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('默认')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('user')
  @ApiOperation({ summary: "用户查询" })
  findOne(@User('firstName') firstName : string) {
    console.log(`Hello ${firstName}`);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  testg(@Param('id', new ParseIntPipe()) id): UserDto{
    return this.appService.fetchData(id)
  }

  @Post()
  // @UsePipes(ValidationPipe)
  // @UsePipes(new JoiValidationPipe(QueryUserDto))
  test(@Body() userDto : UserDto): UserDto {
    return this.appService.returnBody(userDto)
  }
}

