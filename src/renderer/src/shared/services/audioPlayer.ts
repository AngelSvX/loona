class AudioPlayer {
    private audio: HTMLAudioElement;

    constructor() {
        this.audio = new Audio();

        this.audio.volume = 0.05

        this.audio.addEventListener(
            "error",
            () => {
            console.log(this.audio.error);
            }
        );

        this.audio.addEventListener(
            "canplay",
            () => {
            console.log("CAN PLAY");
            }
        );

        this.audio.addEventListener(
            "loadedmetadata",
            () => {
            console.log("METADATA OK");
            }
        );
    }

    load(path: string) {
    const formattedPath = encodeURI(
        `file:///${path.replace(/\\/g, "/")}`
    );

    console.log(formattedPath)

    this.audio.src = formattedPath;
    }

    async play() {
        await this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    toggle() {
        if (this.audio.paused) {
        this.play();
        } else {
        this.pause();
        }
    }

    setVolume(volume: number) {
        this.audio.volume = volume;
    }

    seek(time: number) {
        this.audio.currentTime = time;
    }

    getCurrentTime() {
        return this.audio.currentTime;
    }

    getDuration() {
        return this.audio.duration;
    }

    isPlaying() {
        return !this.audio.paused;
    }
}

export const audioPlayer = new AudioPlayer();