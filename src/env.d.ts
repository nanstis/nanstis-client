/// <reference types="vite/client" />

import axios, { AxiosRequestConfig } from 'axios';
import { Environment } from "@/assets/models/env";

const environment: Environment = import.meta.env

const request = (options?: AxiosRequestConfig) => axios.create({
    baseURL: environment.VITE_API_URL,
    ...(options ? options : {}),
});

export const get = (path: string, options?: AxiosRequestConfig) => {
    return request(options).get(path)
}

export const post = (path: string, data: object) => {
    return request(options).post(path, data)
}

export const postFormData = (path: string, data: FormData) => {
    return request({
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).post(path, data)
}

export const appTitle = environment.VITE_APP_TITLE
export const apiUrl = environment.VITE_API_URL