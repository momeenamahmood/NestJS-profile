import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";

import { ProfilesService } from "./profiles.service";

@Controller('profiles')
export class ProfilesController{
    constructor(private readonly profilesService: ProfilesService) {}

    @Post()
    async addProfile(
        @Body('Name') profileName: string,
        @Body('About') about: string,
        @Body('Experience') experience: string,
        @Body('Education') education: string,
        @Body('Role') role: string,
        ){
        const generatedID = await this.profilesService.createProfile(profileName, about, experience, education,role);
        return {id: generatedID};
    }

    /*
    @Get()
    async getAllProfiles(){
        const profiles = await this.profilesService.getProfiles();
        return profiles;
    }
    */

    @Get(':id')
    async getProfile(
        @Param('id') profileID: string,
    ){
        const profile = await this.profilesService.getMyProfile(profileID);
        return profile;
    }

    @Patch(':id')
    async updateProfile(
        @Param('id') profileID: string,
        @Body('Name') name:string,
        @Body('About') about:string,
        @Body('Experience') experience: string,
        @Body('Education') education:string,
        @Body('Role') role:string,
    ){
        await this.profilesService.updateProfile(profileID, name, about, experience, education, role);
    }

}