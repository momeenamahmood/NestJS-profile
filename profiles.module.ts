import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProfileSchema } from "./profile.model";

import { ProfilesController } from "./profiles.controller";
import { ProfilesService } from "./profiles.service";

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Profile', schema: ProfileSchema}])
    ],
    controllers: [ProfilesController],
    providers: [ProfilesService],
})
export class ProfilesModule{}