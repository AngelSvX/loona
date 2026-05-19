export interface Song {
    id: number,
    name: string,
    author: string,
    image: string,
    duration: string,
    color: string,
    genre: string
}

export interface TemporalSong {
    fileName: string,
    path: string,
}