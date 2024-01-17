import { LoginCredentials } from "@types"

const loginUser=async(credentials:LoginCredentials)=>{
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/login`,{
        method:'POST',
        body:JSON.stringify(credentials),
        headers:{
            "Content-Type":"application/json"
        }
    })
    return response;
}

export default {loginUser}