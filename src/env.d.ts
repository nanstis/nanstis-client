/// <reference types="vite/client" />

import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Environment } from "@/assets/models/env";

const environment: Environment = import.meta.env


const httpClient = new Axios({
    baseURL: environment.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

async function get<T>(path: string, params?: object): Promise<T> {
    const response = await httpClient.get<T>(path, params);
    return response.data as T;
}

async function post<T>(path: string, data: object): T {
    const response: AxiosResponse<T> = await httpClient.post<T>(path, JSON.stringify(data));
    return response.data
}

async function postForm(path: string, data: FormData) {
    return httpClient({
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }).post(path, data)
}

function debounce(closure: CallableFunction, debounceTime: number) {
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

const appTitle = environment.VITE_APP_TITLE
const apiUrl = environment.VITE_API_URL

export {
    get, post, postForm,
    debounce, appTitle, apiUrl
}