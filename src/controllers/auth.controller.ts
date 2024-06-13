import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  register(@Body() body: Body): any {
    return this.authService.register(body);
  }

  @Post('login')
  login(@Body() body: Body): any {
    return this.authService.login(body);
  }
}
