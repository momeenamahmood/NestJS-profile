import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ModuleDeclaration } from "estree";
import { Model } from "mongoose";

import {Profile} from './profile.model';

@Injectable()
export class ProfilesService{
    private profiles: Profile[] = [];

    constructor(@InjectModel('Profile') private readonly profileModel: Model<Profile>,
    ) {}


    async createProfile(name: string, about: string, experience: string, education: string, role: string){
        const newProfile = new this.profileModel({
            name:name, 
            about: about, 
            experience: experience, 
            education: education, 
            role: role,
        });
        const result = await newProfile.save();
        return result.id as string;
    }
/*
    async getProfiles(){
        const profiles = await this.profileModel.find().exec();
        return profiles as Profile[];
    }
*/
    async getMyProfile(profileID: string){
        let profile;
        try{
            profile = await this.profileModel.findById(profileID);
        }catch(error){
            throw new NotFoundException('Could not find profile');
        }
        if(!profile)
        {
            throw new NotFoundException('Could not find profile.');
        }
        return profile;

    }

    async updateProfile(profileID: string, name:string, about:string, experience:string, education:string, role:string){
        //const profileIndex = this.profiles.findIndex((prod) => prod.profileID === profileID);
        //const profile = this.profiles[profileIndex];
        const updatedProfile = await this.profileModel.findById(profileID);
        if(!updatedProfile)
        {
            throw new NotFoundException('Could not find profile');
        }
        if(name)
        {
            updatedProfile.name = name;
        }
        if(about)
        {
            updatedProfile.about = about;
        }
        if(experience)
        {
            updatedProfile.experience = experience;
        }
        if(education)
        {
            updatedProfile.education = education;
        }
        if(role)
        {
            updatedProfile.role = role;
        }
        updatedProfile.save();
        return null;
    }

}