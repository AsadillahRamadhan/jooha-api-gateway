import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import User from './protoloaders/user';
import Handphone from './protoloaders/handphone';
import { HandphoneController } from './controllers/handphone.controller';
import { HandphoneService } from './services/handphone.service';
import { AuthenticateMiddleware } from './middlewares/authenticate.middleware';

@Module({
  imports: [User, Handphone],
  controllers: [AppController, UserController, HandphoneController],
  providers: [AppService, UserService, HandphoneService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticateMiddleware)
      .forRoutes(AppController, HandphoneController);
  }
}
