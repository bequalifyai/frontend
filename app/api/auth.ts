import api from "./api";

export async function login(email: string, password: string) {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    return await api("/auth/login", {
        method: "POST",
        body: formData,
    });
}
