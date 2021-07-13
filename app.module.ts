import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './profiles/profiles.module';

@Module({
  imports: [
    ProfilesModule,
    MongooseModule.forRoot(
      'mongodb+srv://mumina123:0xlehMsQS2rmtJ63@cluster0.t0vrb.mongodb.net/nestjs-profile?retryWrites=true&w=majority'
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
