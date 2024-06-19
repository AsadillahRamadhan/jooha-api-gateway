import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class UserService implements OnModuleInit {
  private userService: UserService;
  constructor(@Inject('USER_SERVICE') private user: ClientGrpc) {}

  onModuleInit() {
    this.userService = this.user.getService<UserService>('UserService');
  }

  setUserData(body: any): Observable<any> {
    return this.userService.setUserData(body);
  }

  getUserData(query: any): Observable<any> {
    return this.userService.getUserData(query);
  }
}
