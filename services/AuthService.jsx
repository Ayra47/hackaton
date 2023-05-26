import ky from "ky";

export const registerApi = async(model) => {
    return ky.post(`${process.env.NEXT_PUBLIC_HOST_API}/register`, {json: model}).json();
}

export const authApi = async(model) => {
    return ky.post(`${process.env.NEXT_PUBLIC_HOST_API}/login`, {json: model}).json();
}
