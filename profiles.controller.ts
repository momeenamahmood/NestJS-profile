import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";

import { ProfilesService } from "./profiles.service";

@Controller('profiles')
export class ProfilesController{
    constructor(private readonly profilesService: ProfilesService) {}

    @Post()
    addProfile(
        @Body('Name') profileName: string,
        @Body('About') about: string,
        @Body('Experience') experience: string,
        @Body('Education') education: string,
        @Body('Role') role: string,
        ){
        const generatedID = this.profilesService.createProfile(profileName, about, experience, education,role);
        return {id: generatedID};
    }

    /*
    @Get()
    getAllProfiles(){
        return this.profilesService.getProfiles();
    }
    */

    @Get(':id')
    getProfile(
        @Param('id') profileID: string,
    ){
        return this.profilesService.getMyProfile(profileID);

    }

    @Patch(':id')
    updateProfile(
        @Param('id') profileID: string,
        @Body('Name') name:string,
        @Body('About') about:string,
        @Body('Experience') experience: string,
        @Body('Education') education:string,
        @Body('Role') role:string,
    ){
        this.profilesService.updateProfile(profileID, name, about, experience, education, role);
    }




}