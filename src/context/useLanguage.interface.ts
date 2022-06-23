export enum Languages {
    en = "en",
    es = "es"
}

export interface LanguageContent {
    lan: Languages;
    toggleLan?:() => void;
}