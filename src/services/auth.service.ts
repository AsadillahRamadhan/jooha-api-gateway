import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService implements OnModuleInit {
  private authService: AuthService;
  constructor(@Inject('AUTH_SERVICE') private auth: ClientGrpc) {}

  onModuleInit() {
    this.authService = this.auth.getService<AuthService>('AuthService');
  }

  register(body: any): Observable<any> {
    const user = {
      name: body.name,
      username: body.username,
      email: body.email,
      password: body.password,
    };

    return this.authService.register(user);
  }

  login(body: any): Observable<any> {
    const user = { username: body.username, password: body.password };

    return this.authService.login(user);
  }
}
