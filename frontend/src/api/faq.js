import api from "./api.js";

export async function getFaq(){
    return api.get('standups/faq/');
}