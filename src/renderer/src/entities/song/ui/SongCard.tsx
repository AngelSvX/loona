import { audioPlayer } from "@renderer/shared/services/audioPlayer";
import { useNavigate } from "react-router";
import { Song } from "../model/types";

function SongCard({ song }: { song: Song }) {

  const navigate = useNavigate()

  return (
    <div className="px-4 md:px-8 lg:px-16" onClick={() => {
      navigate('/play')
    }}>
      <div
        className="group relative w-full rounded-2xl p-px transition-all duration-300 hover:scale-[1.01]"
        style={{
          background: `linear-gradient(135deg, ${song.color}55, #09091a)`
        }}
      >
        <div className="relative flex items-center gap-4 overflow-hidden rounded-2xl bg-[#09091a] p-3">

          <div
            className="absolute inset-0 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"
            style={{ background: song.color }}
          />

          <div className="relative h-28 w-28 shrink-0">
            <img
              src={song.image}
              alt={song.name}
              className="h-full w-full rounded-xl object-cover"
            />

            <span className="absolute right-1 bottom-1 rounded bg-black/70 px-2 py-[2px] text-[10px] text-white">
              {song.duration}
            </span>
          </div>

          <div className="z-10 flex min-w-0 flex-1 flex-col justify-center">

            <h3 className="truncate text-base font-semibold text-[#e0ddff]">
              {song.name}
            </h3>

            <p className="truncate text-sm text-[#8888b0]">
              {song.author}
            </p>

            <div className="mt-2 flex items-center justify-between">
              <span
                className="rounded-full px-2 py-1 text-xs"
                style={{
                  background: `${song.color}33`,
                  color: song.color
                }}
              >
                {song.genre}
              </span>

              <button
                className="rounded-lg px-4 py-1 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100"
                style={{
                  background: song.color,
                }}
                onClick={async () => {
                  audioPlayer.load(song.path);
                  await audioPlayer.play()
                }}
              >
                ▶ Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SongCard