import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

const Auth = ClientsModule.register([
  {
    name: 'AUTH_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'auth',
      protoPath: process.env.AUTH_PROTO_PATH,
      url: process.env.AUTH_SERVICE,
    },
  },
]);
export default Auth;
