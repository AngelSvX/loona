export interface Song {
    id: number,
    name: string,
    author: string,
    image: string,
    duration: string,
    color: string,
    genre: string,
    path: string,
}

export interface TemporalSong {
    fileName: string,
    path: string,
}