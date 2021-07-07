import { Injectable, NotFoundException } from "@nestjs/common";

import {Profile} from './profile.model';

@Injectable()
export class ProfilesService{
    private profiles: Profile[] = [];


    createProfile(name: string, about: string, experience: string, education: string, role: string){
        const profileID = Math.random().toString();
        const newProfile = new Profile(profileID, name, about, experience, education, role);
        this.profiles.push(newProfile);
        return profileID;
    }
/*
    getProfiles(){
        return [...this.profiles];
    }
*/
    getMyProfile(profileID: string){
        const profile = this.profiles.find((prod) => prod.profileID === profileID);
        if(!profile)
        {
            throw new NotFoundException('Could not find product.');
        }
        return {...profile};

    }

    updateProfile(profileID: string, name:string, about:string, experience:string, education:string, role:string){
        const profileIndex = this.profiles.findIndex((prod) => prod.profileID === profileID);
        const profile = this.profiles[profileIndex];
        if(!profile)
        {
            throw new NotFoundException('Could not find product');
        }
        const updatedProfile = profile;
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
        this.profiles[profileIndex] = updatedProfile;
        return null;
    }

}