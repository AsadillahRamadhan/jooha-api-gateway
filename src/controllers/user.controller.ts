import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('register')
  register(@Body() body: Body): any {
    return this.userService.register(body);
  }

  @Post('login')
  login(@Body() body: Body): any {
    return this.userService.login(body);
  }

  @Post('generate-access-token')
  generateAccessToken(@Body() body: Body): any {
    return this.userService.generateAccessToken(body);
  }

  @Post('set-user-data')
  setUserData(@Body() body: Body): any {
    return this.userService.setUserData(body);
  }

  @Get('get-user-data')
  getUserData(@Query() query: any): any {
    return this.userService.getUserData(query);
  }
}
