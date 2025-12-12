export interface LoginError {
    detail: string
}

export type LoginResponse = LoginError | null;