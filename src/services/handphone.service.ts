import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class HandphoneService implements OnModuleInit {
  private handphoneService: HandphoneService;
  constructor(@Inject('HANDPHONE_SERVICE') private handphone: ClientGrpc) {}

  onModuleInit() {
    this.handphoneService =
      this.handphone.getService<HandphoneService>('HandphoneService');
  }

  getAllHandphone(): Observable<any> {
    return this.handphoneService.getAllHandphone();
  }

  getHandphone(handphone_id: any): Observable<any> {
    return this.handphoneService.getHandphone(handphone_id);
  }

  getHandphoneByQuery(query: any): Observable<any> {
    return this.handphoneService.getHandphoneByQuery(query);
  }
}
