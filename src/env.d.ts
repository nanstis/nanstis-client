/// <reference types="vite/client" />

import axios, { Axios, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Environment } from "@/assets/models/env";

export const environment: Environment = import.meta.env

export const request = (options?: AxiosRequestConfig) => axios.create({
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

export const debounce = (closure: CallableFunction, debounceTime: number) => {
    let timer = 0;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        const context = this;
        timer = setTimeout(() => {
            closure.apply(context, args);
        }, debounceTime);
    }
}

export const appTitle = environment.VITE_APP_TITLE
export const apiUrl = environment.VITE_API_URL
