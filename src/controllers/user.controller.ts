import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { UserService } from 'src/services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('set-user-data')
  setUserData(@Body() body: Body): any {
    return this.userService.setUserData(body);
  }

  @Get('get-user-data')
  getUserData(@Query() query: any): any {
    return this.userService.getUserData(query);
  }
}
