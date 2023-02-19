/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_SP_URL: string;
    readonly VITE_APP_SP_KEY: string;

}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
