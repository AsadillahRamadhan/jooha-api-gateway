import { ClientsModule, Transport } from '@nestjs/microservices';
import 'dotenv/config';

const Handphone = ClientsModule.register([
  {
    name: 'HANDPHONE_SERVICE',
    transport: Transport.GRPC,
    options: {
      package: 'handphone',
      protoPath: process.env.HANDPHONE_PROTO_PATH,
      url: process.env.HANDPHONE_SERVICE,
      loader: { keepCase: true },
    },
  },
]);
export default Handphone;
