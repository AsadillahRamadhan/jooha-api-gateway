import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

const User = ClientsModule.register([
  {
    name: 'USER_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: process.env.USER_PROTO_PATH,
      url: process.env.USER_SERVICE,
      loader: { keepCase: true },
    },
  },
]);
export default User;
