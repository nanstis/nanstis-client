interface DtoSegment {
    text: string;
    absolutePath: string;
    transcript: {
        absolutePath: string;
        id: number
    }
    id: number;
}

export type { DtoSegment }