import { Controller, Query, Get } from '@nestjs/common';
import { HandphoneService } from 'src/services/handphone.service';

@Controller()
export class HandphoneController {
  constructor(private readonly handphoneService: HandphoneService) {}

  @Get('get-all-handphone')
  getAllHandphone(): any {
    return this.handphoneService.getAllHandphone();
  }

  @Get('get-handphone')
  getHandphone(@Query() query: any): any {
    return this.handphoneService.getHandphone({
      handphone_id: query.handphone_id,
    });
  }

  @Get('get-handphone-by-query')
  getHandphoneByQuery(@Query() query: any): any {
    return this.handphoneService.getHandphoneByQuery({ query: query });
  }
}
