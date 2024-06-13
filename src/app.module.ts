import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import Auth from './protoloaders/auth';

@Module({
  imports: [Auth],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService],
})
export class AppModule {}
