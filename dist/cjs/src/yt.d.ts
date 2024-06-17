export interface ytmp3Result {
    status: Boolean,
    title: String,
    duration: String,
    durationMs: Number,
    size: String,
    type: String,
    quality: String,
    id: String,
    thumbnail: String,
    url: String
}

export interface ytmp4Result {
    status: Boolean,
    title: String,
    channel: String,
    duration: String,
    durationMs: Number,
    size: String,
    type: String,
    quality: String,
    id: String,
    thumbnail: String,
    url: String
}

export declare function ytmp3(url: String): Promise<ytmp3Result>
export declare function ytmp4(url: String): Promise<ytmp4Result>