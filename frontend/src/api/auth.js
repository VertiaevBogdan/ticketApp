import api from "./api.js";

// login
export  async function loginUser(email, password, csrfToken){
  const response = await api.post(
      'users/login/',
      {email, password},
    {
        withCredentials: true,
        headers: {"X-CSRFToken": csrfToken},
    }
  );

  return await response.data;
}

export async function getCsrfToken(){
    const response = api.get("users/csrf/",{
     withCredentials: true,
    });

    return response.data.csrfToken;
}

export async function registerUser(userData){
    return await api.post("users/register/", userData);
}