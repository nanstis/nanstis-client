/// <reference types="vite/client" />

import axios, { AxiosRequestConfig } from 'axios';
import { Environment } from "@/assets/models/data/Environment";

const environment: Environment = import.meta.env

const request = (options?: AxiosRequestConfig) => axios.create({
    baseURL: environment.VITE_API_URL,
    ...(options ? options : {}),
});

export const get = (path: string, options?: AxiosRequestConfig) => {
    return request(options).get(path)
}

export const post = (path: string, options?: AxiosRequestConfig, formData?: FormData) => {
    return request(options).post(path, formData)
}

export const appTitle = environment.VITE_APP_TITLE
export const apiUrl = environment.VITE_API_URL