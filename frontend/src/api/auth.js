import api from "./api.js";

// login
export  async function login(email, password, csrfToken){
  const response = await api.get('/users/login/', {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrfToken,
      },
      body: JSON.stringlify({email, password}),
  });

  return await response.json();
}

export async function getCsrfToken(){
    const response = api.get("/users/csrf/",{
     method: "GET",
     credentials: "include",
    });

    const data = await response.json();
    return data.csrfToken;
}