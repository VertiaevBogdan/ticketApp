import api from "./api.js";

export async function getStandup(slug = ""){
    const url = slug ? `standups/standup/${slug}/` : 'standups/standup/';
    return api.get(url);
}

export async function getMainStandup(){
    return api.get('standups/mainStandup/');
}

export async function getStandupCards(){
    return api.get('standups/standupCards/');
}

export async function getStandupTour(){
    return api.get('standups/standupTour/');
}