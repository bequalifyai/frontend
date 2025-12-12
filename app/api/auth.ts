import api from "./api";
import type {LoginResponse} from '@/types/api/auth.types'

export async function login(email: string, password: string): Promise<LoginResponse> {
    const formData = new FormData();
    formData.append("username", email);
    formData.append("password", password);

    return await api("/auth/login", { method: "POST", body: formData});
}