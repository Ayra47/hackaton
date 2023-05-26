import ky from "ky";

const baseApi = ky.create({
    prefixUrl: `${process.env.NEXT_PUBLIC_HOST_API}/`,
});

const secureApi = (token) =>
    baseApi.extend({
        headers: new Headers({
            authorization: `Bearer ${token}`,
        }),
    });

export const registerApi = async (model) => {
    return baseApi.post(`register`, { json: model }).json();
};

export const authApi = async (model) => {
    return baseApi.post(`login`, { json: model }).json();
};

export const CheckUser = async (token) => {
    try {
        return await secureApi(token).post("protected").json();
    } catch(e) {
        return 0;
    }
};
