/// <reference types="vite/client" />


interface ImportMeta {
    readonly VITE_APP_TITLE: string
}

interface ImportMetaEnv {
    readonly env: ImportMeta
}

export const environment: ImportMeta = import.meta.env