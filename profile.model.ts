import * as mongoose from 'mongoose';

export const ProfileSchema = new mongoose.Schema({
    name: {type: String, required: true},
    about: {type: String, required: true},
    experience: {type: String, required: true},
    education: {type: String, required: true},
    role: {type: String, required: true},
});


export interface Profile extends mongoose.Document{

    profileID: string;
    name: string;
    about: string; 
    experience: string; 
    education: string;
    role: string;  
}